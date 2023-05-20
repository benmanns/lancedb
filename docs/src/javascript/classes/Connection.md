[vectordb](../README.md) / [Exports](../modules.md) / Connection

# Class: Connection

A connection to a LanceDB database.

## Table of contents

### Constructors

- [constructor](Connection.md#constructor)

### Properties

- [\_db](Connection.md#_db)
- [\_uri](Connection.md#_uri)

### Accessors

- [uri](Connection.md#uri)

### Methods

- [createTable](Connection.md#createtable)
- [createTableArrow](Connection.md#createtablearrow)
- [openTable](Connection.md#opentable)
- [tableNames](Connection.md#tablenames)

## Constructors

### constructor

• **new Connection**(`uri`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[index.ts:41](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L41)
=======
[index.ts:41](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L41)
>>>>>>> 89888ec (add js API doc generation)
=======
[index.ts:41](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L41)
>>>>>>> 8ff59da (update links + modal example)
=======
[index.ts:41](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L41)
>>>>>>> 2c27003 (add js API doc generation)

## Properties

### \_db

• `Private` `Readonly` **\_db**: `any`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[index.ts:39](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L39)
=======
[index.ts:39](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L39)
>>>>>>> 89888ec (add js API doc generation)
=======
[index.ts:39](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L39)
>>>>>>> 8ff59da (update links + modal example)
=======
[index.ts:39](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L39)
>>>>>>> 2c27003 (add js API doc generation)

___

### \_uri

• `Private` `Readonly` **\_uri**: `string`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[index.ts:38](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L38)
=======
[index.ts:38](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L38)
>>>>>>> 89888ec (add js API doc generation)
=======
[index.ts:38](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L38)
>>>>>>> 8ff59da (update links + modal example)
=======
[index.ts:38](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L38)
>>>>>>> 2c27003 (add js API doc generation)

## Accessors

### uri

• `get` **uri**(): `string`

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[index.ts:46](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L46)
=======
[index.ts:46](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L46)
>>>>>>> 89888ec (add js API doc generation)
=======
[index.ts:46](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L46)
>>>>>>> 8ff59da (update links + modal example)
=======
[index.ts:46](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L46)
>>>>>>> 2c27003 (add js API doc generation)

## Methods

### createTable

▸ **createTable**(`name`, `data`): `Promise`<[`Table`](Table.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `Record`<`string`, `unknown`\>[] |

#### Returns

`Promise`<[`Table`](Table.md)\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[index.ts:66](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L66)
=======
[index.ts:66](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L66)
>>>>>>> 89888ec (add js API doc generation)
=======
[index.ts:66](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L66)
>>>>>>> 8ff59da (update links + modal example)
=======
[index.ts:66](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L66)
>>>>>>> 2c27003 (add js API doc generation)

___

### createTableArrow

▸ **createTableArrow**(`name`, `table`): `Promise`<[`Table`](Table.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `table` | `Table`<`any`\> |

#### Returns

`Promise`<[`Table`](Table.md)\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[index.ts:71](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L71)
=======
[index.ts:71](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L71)
>>>>>>> 89888ec (add js API doc generation)
=======
[index.ts:71](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L71)
>>>>>>> 8ff59da (update links + modal example)
=======
[index.ts:71](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L71)
>>>>>>> 2c27003 (add js API doc generation)

___

### openTable

▸ **openTable**(`name`): `Promise`<[`Table`](Table.md)\>

Open a table in the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the table. |

#### Returns

`Promise`<[`Table`](Table.md)\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[index.ts:61](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L61)
=======
[index.ts:61](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L61)
>>>>>>> 89888ec (add js API doc generation)
=======
[index.ts:61](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L61)
>>>>>>> 8ff59da (update links + modal example)
=======
[index.ts:61](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L61)
>>>>>>> 2c27003 (add js API doc generation)

___

### tableNames

▸ **tableNames**(): `Promise`<`string`[]\>

Get the names of all tables in the database.

#### Returns

`Promise`<`string`[]\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[index.ts:53](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L53)
=======
[index.ts:53](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L53)
>>>>>>> 89888ec (add js API doc generation)
=======
[index.ts:53](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L53)
>>>>>>> 8ff59da (update links + modal example)
=======
[index.ts:53](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L53)
>>>>>>> 2c27003 (add js API doc generation)
