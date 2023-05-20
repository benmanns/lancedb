[vectordb](../README.md) / [Exports](../modules.md) / Table

# Class: Table

A table in a LanceDB database.

## Table of contents

### Constructors

- [constructor](Table.md#constructor)

### Properties

- [\_name](Table.md#_name)
- [\_tbl](Table.md#_tbl)

### Accessors

- [name](Table.md#name)

### Methods

- [add](Table.md#add)
- [overwrite](Table.md#overwrite)
- [search](Table.md#search)

## Constructors

### constructor

• **new Table**(`tbl`, `name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tbl` | `any` |
| `name` | `string` |

#### Defined in

<<<<<<< HEAD
[index.ts:85](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L85)
=======
[index.ts:85](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L85)
>>>>>>> 89888ec (add js API doc generation)

## Properties

### \_name

• `Private` `Readonly` **\_name**: `string`

#### Defined in

<<<<<<< HEAD
[index.ts:83](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L83)
=======
[index.ts:83](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L83)
>>>>>>> 89888ec (add js API doc generation)

___

### \_tbl

• `Private` `Readonly` **\_tbl**: `any`

#### Defined in

<<<<<<< HEAD
[index.ts:82](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L82)
=======
[index.ts:82](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L82)
>>>>>>> 89888ec (add js API doc generation)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[index.ts:90](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L90)
=======
[index.ts:90](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L90)
>>>>>>> 89888ec (add js API doc generation)

## Methods

### add

▸ **add**(`data`): `Promise`<`number`\>

Insert records into this Table

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`<`string`, `unknown`\>[] | Records to be inserted into the Table |

#### Returns

`Promise`<`number`\>

The number of rows added to the table

#### Defined in

<<<<<<< HEAD
[index.ts:109](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L109)
=======
[index.ts:109](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L109)
>>>>>>> 89888ec (add js API doc generation)

___

### overwrite

▸ **overwrite**(`data`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `unknown`\>[] |

#### Returns

`Promise`<`number`\>

#### Defined in

<<<<<<< HEAD
[index.ts:113](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L113)
=======
[index.ts:113](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L113)
>>>>>>> 89888ec (add js API doc generation)

___

### search

▸ **search**(`queryVector`): [`Query`](Query.md)

Create a search query to find the nearest neighbors of the given query vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryVector` | `number`[] | The query vector. |

#### Returns

[`Query`](Query.md)

#### Defined in

<<<<<<< HEAD
[index.ts:98](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L98)
=======
[index.ts:98](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L98)
>>>>>>> 89888ec (add js API doc generation)
