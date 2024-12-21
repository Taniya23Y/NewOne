"use client";

import { PropsWithChildren } from "react";
import { LinkPreview } from "../context/link-preview";

type TLinkPreviewWrapperProps = {
  url: string;
  className: string;
  width?: number;
  height?: number;
};

const LinkPreviewWrapper = ({
  children,
  url,
  className,
  width,
  height,
}: PropsWithChildren<TLinkPreviewWrapperProps>) => {
  return (
    <LinkPreview url={url} className={className} width={width} height={height}>
      {children}
    </LinkPreview>
  );
};

export default LinkPreviewWrapper;
