import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Body from '../ui/atoms/typographies/body.atom';
import {
  BlocksComponents,
  BlocksRendererProps,
  GetPropsFromNode,
  ImageBlockNode,
  ListItemInlineNode,
  ParagraphBlockNode,
  QuoteBlockNode,
} from '../interfaces/blocksRender.interface';
import Title from '../ui/atoms/typographies/title.atom';
import Heading from '../ui/atoms/typographies/heading.atom';
import SubHeading from '../ui/atoms/typographies/subHeading.atom';
import Blockquote from '../ui/atoms/typographies/blockquote.atom';
import PictureSource from '../ui/atoms/pictureSource.atom';
import { UploadFile } from '../graphql/types/uploadFile.types';

const CustomBlocks: Partial<BlocksComponents> = {
  image: ({ image }: GetPropsFromNode<ImageBlockNode>) => {
    return (
      <PictureSource
        sourceUsage={{ thumbnail: true, small: true, medium: true }}
        sources={image as unknown as UploadFile}
        className="max-h-96 rounded-lg aspect-video"
      />
    );
  },
  paragraph: (value: GetPropsFromNode<ParagraphBlockNode>) => <Body>{value.children}</Body>,
  quote: (value: GetPropsFromNode<QuoteBlockNode>) => <Blockquote weight="font-semibold">{value.children}</Blockquote>,
  heading: ({ children, level }) => {
    switch (level) {
      case 1:
        return <Title>{children}</Title>;
      case 2:
        return (
          <Heading weight="font-semibold" className="mt-2">
            {children}
          </Heading>
        );
      case 3:
        return (
          <SubHeading weight="font-semibold" className="mt-2">
            {children}
          </SubHeading>
        );
      default:
        return <Title>{children}</Title>;
    }
  },
  'list-item': (value: GetPropsFromNode<ListItemInlineNode>) => (
    <li className="list-disc list-inside text-md md:text-lg text-body-500 font-normal smooth-transition">{value.children}</li>
  ),
};

const BlocksRender = ({ content, blocks = CustomBlocks, modifiers }: BlocksRendererProps) => {
  return <BlocksRenderer content={content} blocks={blocks} modifiers={modifiers} />;
};

export default BlocksRender;
