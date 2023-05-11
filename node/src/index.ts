// Copyright 2023 Lance Developers.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { tableFromIPC, Vector } from 'apache-arrow'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { databaseNew, databaseTableNames, databaseOpenTable, tableSearch } = require('../index.node')

/**
 * Connect to a LanceDB instance at the given URI
 * @param uri The uri of the database.
 */
export function connect (uri: string): Connection {
  return new Connection(uri)
}

/**
 * A connection to a LanceDB database.
 */
export class Connection {
  private readonly _uri: string
  private readonly _db: any

  constructor (uri: string) {
    this._uri = uri
    this._db = databaseNew(uri)
  }

  get uri (): string {
    return this._uri
  }

  /**
     * Get the names of all tables in the database.
     */
  tableNames (): string[] {
    return databaseTableNames.call(this._db)
  }

  /**
     * Open a table in the database.
     * @param name The name of the table.
     */
  async openTable (name: string): Promise<Table> {
    const tbl = await databaseOpenTable.call(this._db, name)
    return new Table(tbl, name)
  }
}

/**
 * A table in a LanceDB database.
 */
export class Table {
  private readonly _tbl: any
  private readonly _name: string

  constructor (tbl: any, name: string) {
    this._tbl = tbl
    this._name = name
  }

  get name (): string {
    return this._name
  }

  /**
     * Create a search query to find the nearest neighbors of the given query vector.
     * @param queryVector The query vector.
     */
  search (queryVector: number[]): Query {
    return new Query(this._tbl, queryVector)
  }
}

/**
 * A builder for nearest neighbor queries for LanceDB.
 */
export class Query {
  private readonly _tbl: any
  private readonly _query_vector: number[]
  private _limit: number
  private readonly _refine_factor?: number
  private readonly _nprobes: number
  private readonly _columns?: string[]
  private readonly _where?: string
  private readonly _metric = 'L2'

  constructor (tbl: any, queryVector: number[]) {
    this._tbl = tbl
    this._query_vector = queryVector
    this._limit = 10
    this._nprobes = 20
    this._refine_factor = undefined
    this._columns = undefined
    this._where = undefined
  }

  set limit (value: number) {
    this._limit = value
  }

  get limit (): number {
    return this._limit
  }

  /**
     * Execute the query and return the results as an Array of Objects
     */
  async execute (): Promise<unknown[]> {
    const buffer = await tableSearch.call(this._tbl, this._query_vector, this._limit)
    const data = tableFromIPC(buffer)
    return data.toArray().map((entry: Record<string, unknown>) => {
      const newObject: Record<string, unknown> = {}
      Object.keys(entry).forEach((key: string) => {
        if (entry[key] instanceof Vector) {
          newObject[key] = (entry[key] as Vector).toArray()
        } else {
          newObject[key] = entry[key]
        }
      })
      return newObject
    })
  }

  /**
     * Execute the query and return the results as an Array of the generic type provided
     */
  async execute_cast<T>(): Promise<T[]> {
    return await this.execute() as T[]
  }
}
