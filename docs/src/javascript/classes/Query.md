[vectordb](../README.md) / [Exports](../modules.md) / Query

# Class: Query

A builder for nearest neighbor queries for LanceDB.

## Table of contents

### Constructors

- [constructor](Query.md#constructor)

### Properties

- [\_columns](Query.md#_columns)
- [\_filter](Query.md#_filter)
- [\_limit](Query.md#_limit)
- [\_metric](Query.md#_metric)
- [\_nprobes](Query.md#_nprobes)
- [\_query\_vector](Query.md#_query_vector)
- [\_refine\_factor](Query.md#_refine_factor)
- [\_tbl](Query.md#_tbl)

### Methods

- [execute](Query.md#execute)
- [filter](Query.md#filter)
- [limit](Query.md#limit)

## Constructors

### constructor

• **new Query**(`tbl`, `queryVector`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tbl` | `any` |
| `queryVector` | `number`[] |

#### Defined in

<<<<<<< HEAD
[index.ts:131](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L131)
=======
[index.ts:131](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L131)
>>>>>>> 89888ec (add js API doc generation)

## Properties

### \_columns

• `Private` `Optional` `Readonly` **\_columns**: `string`[]

#### Defined in

<<<<<<< HEAD
[index.ts:127](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L127)
=======
[index.ts:127](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L127)
>>>>>>> 89888ec (add js API doc generation)

___

### \_filter

• `Private` `Optional` **\_filter**: `string`

#### Defined in

<<<<<<< HEAD
[index.ts:128](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L128)
=======
[index.ts:128](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L128)
>>>>>>> 89888ec (add js API doc generation)

___

### \_limit

• `Private` **\_limit**: `number`

#### Defined in

<<<<<<< HEAD
[index.ts:124](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L124)
=======
[index.ts:124](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L124)
>>>>>>> 89888ec (add js API doc generation)

___

### \_metric

• `Private` `Readonly` **\_metric**: ``"L2"``

#### Defined in

<<<<<<< HEAD
[index.ts:129](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L129)
=======
[index.ts:129](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L129)
>>>>>>> 89888ec (add js API doc generation)

___

### \_nprobes

• `Private` `Readonly` **\_nprobes**: `number`

#### Defined in

<<<<<<< HEAD
[index.ts:126](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L126)
=======
[index.ts:126](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L126)
>>>>>>> 89888ec (add js API doc generation)

___

### \_query\_vector

• `Private` `Readonly` **\_query\_vector**: `number`[]

#### Defined in

<<<<<<< HEAD
[index.ts:123](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L123)
=======
[index.ts:123](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L123)
>>>>>>> 89888ec (add js API doc generation)

___

### \_refine\_factor

• `Private` `Optional` `Readonly` **\_refine\_factor**: `number`

#### Defined in

<<<<<<< HEAD
[index.ts:125](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L125)
=======
[index.ts:125](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L125)
>>>>>>> 89888ec (add js API doc generation)

___

### \_tbl

• `Private` `Readonly` **\_tbl**: `any`

#### Defined in

<<<<<<< HEAD
[index.ts:122](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L122)
=======
[index.ts:122](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L122)
>>>>>>> 89888ec (add js API doc generation)

## Methods

### execute

▸ **execute**<`T`\>(): `Promise`<`T`[]\>

Execute the query and return the results as an Array of Objects

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `unknown`\> |

#### Returns

`Promise`<`T`[]\>

#### Defined in

<<<<<<< HEAD
[index.ts:154](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L154)
=======
[index.ts:154](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L154)
>>>>>>> 89888ec (add js API doc generation)

___

### filter

▸ **filter**(`value`): [`Query`](Query.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Query`](Query.md)

#### Defined in

<<<<<<< HEAD
[index.ts:146](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L146)
=======
[index.ts:146](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L146)
>>>>>>> 89888ec (add js API doc generation)

___

### limit

▸ **limit**(`value`): [`Query`](Query.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Query`](Query.md)

#### Defined in

<<<<<<< HEAD
[index.ts:141](https://github.com/lancedb/lancedb/blob/6d6e80b/node/src/index.ts#L141)
=======
[index.ts:141](https://github.com/lancedb/lancedb/blob/e234a3e/node/src/index.ts#L141)
>>>>>>> 89888ec (add js API doc generation)
