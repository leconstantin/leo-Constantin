// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer2/core'
import * as Local from 'contentlayer2/source-files'

export { isType } from 'contentlayer2/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  title: string
  description?: string | undefined
  avatar: string
  twitter: string
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
}

export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  description?: string | undefined
  date: IsoDateTimeString
  published: boolean
  image: string
  authors: string[]
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Author | Post
export type DocumentTypeNames = 'Author' | 'Post'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPosts: Post[]
  allAuthors: Author[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Author: Author
  Post: Post
}

export type NestedTypeMap = {

}

 