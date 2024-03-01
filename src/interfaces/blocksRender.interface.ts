/* note: This types are from the library *@strapi/blocks-react-renderer*, located at *@strapi/blocks-react-renderer/dist/BlocksRenderer.d.ts* */

interface TextInlineNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}
type Modifier = Exclude<keyof TextInlineNode, "type" | "text">;

interface LinkInlineNode {
  type: "link";
  url: string;
  children: TextInlineNode[];
}
interface ListItemInlineNode {
  type: "list-item";
  children: DefaultInlineNode[];
}
type DefaultInlineNode = TextInlineNode | LinkInlineNode;
type NonTextInlineNode = Exclude<DefaultInlineNode, TextInlineNode> | ListItemInlineNode;
interface ParagraphBlockNode {
  type: "paragraph";
  children: DefaultInlineNode[];
}
interface QuoteBlockNode {
  type: "quote";
  children: DefaultInlineNode[];
}
interface CodeBlockNode {
  type: "code";
  children: DefaultInlineNode[];
}
interface HeadingBlockNode {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: DefaultInlineNode[];
}
interface ListBlockNode {
  type: "list";
  format: "ordered" | "unordered";
  children: (ListItemInlineNode | ListBlockNode)[];
}
interface ImageBlockNode {
  type: "image";
  image: {
    name: string;
    alternativeText?: string | null;
    url: string;
    caption?: string | null;
    width: number;
    height: number;
    formats?: Record<string, unknown>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: unknown | null;
    createdAt: string;
    updatedAt: string;
  };
  children: [
    {
      type: "text";
      text: "";
    }
  ];
}
type RootNode = ParagraphBlockNode | QuoteBlockNode | CodeBlockNode | HeadingBlockNode | ListBlockNode | ImageBlockNode;
type NodeRender = RootNode | NonTextInlineNode;
type GetPropsFromNode<T> = Omit<T, "type" | "children"> & {
  children?: React.ReactNode;
  plainText?: T extends {
    type: "code";
  }
    ? string
    : never;
};
type BlocksComponents = {
  [K in NodeRender["type"]]: React.ComponentType<
    GetPropsFromNode<
      Extract<
        Node,
        {
          type: K;
        }
      >
    >
  >;
};
type ModifiersComponents = {
  [K in Modifier]: React.ComponentType<{
    children: React.ReactNode;
  }>;
};

interface BlocksRendererProps {
  content: RootNode[];
  blocks?: Partial<BlocksComponents>;
  modifiers?: Partial<ModifiersComponents>;
}

export type {
  BlocksRendererProps,
  BlocksComponents,
  GetPropsFromNode,
  ParagraphBlockNode,
  QuoteBlockNode,
  CodeBlockNode,
  HeadingBlockNode,
  ListBlockNode,
  ImageBlockNode,
  ListItemInlineNode,
};
