export interface SvgProp {
  fill: string;
  className: string;
}

export interface IconProps {
  fill?: string;
}

export interface LinkItem {
  id: number;
  platform: string;
  link: string;
  error?: boolean;
}

export interface PhoneSimulatorProps {
  ShowLinks: LinkItem[];
}


export interface LinksArrayProps {
  linksArr: LinkItem[];
  setLinksArr: React.Dispatch<React.SetStateAction<LinkItem[]>>;
}

export interface SECLinkItem {
  id: number;
  platform: string;
  link: string;
  error: boolean;
}

export interface LinksProps {
  linksArr: SECLinkItem[]; // error required
  setLinksArr: React.Dispatch<React.SetStateAction<SECLinkItem[]>>; // must match linksArr type
  setShowLinks: (links: SECLinkItem[]) => void; // also consistent
}