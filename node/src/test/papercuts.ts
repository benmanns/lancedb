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

import { describe } from 'mocha'
import { assert } from 'chai'
import { track } from 'temp'

import * as lancedb from '../index'
import * as fs from 'fs'

describe('Connection', function () {
  describe('#connect', function () {
    it('if user doesn\'t have permissions to access the folder', async function () {
      await lancedb.connect('/tmp/notme')
      // works fine!
    })

    it('if user doesn\'t have permissions to access to the parent folder', async function () {
      await lancedb.connect('/tmp/notme/sub_folder')
      // works fine!
    })

    it('directory has files and they are not lance files', async function () {
      await lancedb.connect('/tmp')
      // works fine
    })
  })

  describe('#openTable', function () {
    it('when trying to open a non-existing table', async function () {
      const uri = await createTestDB()
      const con = await lancedb.connect(uri)
      const table = await con.openTable('vectors_missing')
      assert.equal(table.name, 'vectors')
    })
  })

  describe('#createTable', function () {
    // empty data
    it('passing no data', async function () {
      const dir = await track().mkdir('lancejs')
      const con = await lancedb.connect(dir)
      await con.createTable('vectors', [])
    })

    // empty table name
    it('empty table name', async function () {
      const dir = await track().mkdir('lancejs')
      const con = await lancedb.connect(dir)
      const data = [
        { id: 1, vector: [0.1, 0.2], price: 10 }
      ]
      const table = await con.createTable('', data)
      // works!
      const results = await table.search([0.1, 0.3]).execute()
      assert.equal(results.length, 1)
    })

    it('table already exists', async function () {
      const uri = await createTestDB()
      const con = await lancedb.connect(uri)
      const data = [
        { id: 1, vector: [0.1, 0.2], price: 10 }
      ]
      const table = await con.createTable('vectors', data)
      await table.search([0.1, 0.3]).filter('id == "2"').execute()
    })

    // table directory exists but is not empty
    it('table directory exists but is not empty', async function () {
      const dir = await track().mkdir('lancejs')
      await fs.promises.writeFile(dir + '/foo.txt', 'Testing')
      const con = await lancedb.connect(dir)
      const data = [
        { id: 1, vector: [0.1, 0.2], price: 10 }
      ]
      const table = await con.createTable('vectors', data)
      // works!
    })
  })
})

describe('Table', function () {
  describe('#add', function () {
    it('different column types', async function () {
      const dir = await track().mkdir('lancejs')
      const con = await lancedb.connect(dir)

      const data = [
        { id: 1, vector: [0.1, 0.2], price: 10, name: 'a' },
      ]

      const table = await con.createTable('vectors', data)
      const dataAdd = [
        { id: 3, vector: [2.1, 2.2], price: '10', name: true }
      ]
      await table.add(dataAdd)
    })

    it('missing vector column', async function () {
      const dir = await track().mkdir('lancejs')
      const con = await lancedb.connect(dir)

      const data = [
        { id: 1, vector: [0.1, 0.2], price: 10, name: 'a' },
      ]

      const table = await con.createTable('vectors', data)
      const dataAdd = [
        { id: 3, price: '10', name: true }
      ]
      await table.add(dataAdd)
    })

    it('missing non-vector column', async function () {
      const dir = await track().mkdir('lancejs')
      const con = await lancedb.connect(dir)

      const data = [
        { id: 1, vector: [0.1, 0.2], price: 10, name: 'a' }
      ]

      const table = await con.createTable('vectors', data)
      const dataAdd = [
        { id: 3, vector: [2.1, 2.2], price: '10' }
      ]
      await table.add(dataAdd)
    })

    it('different vector dimension #', async function () {
      const dir = await track().mkdir('lancejs')
      const con = await lancedb.connect(dir)

      const data = [
        { id: 1, vector: [0.1, 0.2], price: 10, name: 'a' }
      ]

      const table = await con.createTable('vectors', data)
      const dataAdd = [
        { id: 3, vector: [2.1], price: '10' }
      ]
      await table.add(dataAdd)
    })
  })

  describe('#overrite', function () {
    // Same as add?
  })

  describe('#create_index', function () {
    it('vector colum does not exist', async function () {
      const uri = await createTestDB(32, 300)
      const con = await lancedb.connect(uri)
      const table = await con.openTable('vectors')
      await table.create_index({ type: 'ivf_pq', column: 'wrong', num_partitions: 2, max_iters: 2 })
    }).timeout(10_000)

    it('column is not a vector', async function () {
      const uri = await createTestDB(32, 300)
      const con = await lancedb.connect(uri)
      const table = await con.openTable('vectors')
      await table.create_index({ type: 'ivf_pq', column: 'name', num_partitions: 2, max_iters: 2 })
    }).timeout(10_000)

    it('num_partitions is 0 / negative', async function () {
      const uri = await createTestDB(32, 300)
      const con = await lancedb.connect(uri)
      const table = await con.openTable('vectors')
      await table.create_index({ type: 'ivf_pq', column: 'vector', num_partitions: -1, max_iters: 2 })
    }).timeout(10_000)
  })
})

describe('Query', function () {
  describe('#search', function () {
    it('execute a query with a vector with the wrong dimension #', async function () {
      const uri = await createTestDB()
      const con = await lancedb.connect(uri)
      const table = await con.openTable('vectors')
      await table.search([0.1]).execute()
    })

    it('when passing a negative limit /k value', async function () {
      const uri = await createTestDB()
      const con = await lancedb.connect(uri)
      const table = await con.openTable('vectors')
      await table.search([0.1, 0.3]).limit(-1).execute()
    })

    it('when using a string filter in an int column', async function () {
      const uri = await createTestDB()
      const con = await lancedb.connect(uri)
      const table = await con.openTable('vectors')
      await table.search([0.1, 0.3]).filter('id == "2"').execute()
    })
  })
})

async function createTestDB (numDimensions: number = 2, numRows: number = 2): Promise<string> {
  const dir = await track().mkdir('lancejs')
  const con = await lancedb.connect(dir)

  const data = []
  for (let i = 0; i < numRows; i++) {
    const vector = []
    for (let j = 0; j < numDimensions; j++) {
      vector.push(i + (j * 0.1))
    }
    data.push({id: i + 1, name: `name_${i}`, price: i + 10, is_active: (i % 2 === 0), vector})
  }

  await con.createTable('vectors', data)
  return dir
}
