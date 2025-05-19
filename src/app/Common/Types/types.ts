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
  firstName: string;
  lastName: string;
  email: string;
  photo?: string | null;
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
  linksArr: SECLinkItem[];
  setLinksArr: React.Dispatch<React.SetStateAction<SECLinkItem[]>>;
  setShowLinks: (links: SECLinkItem[]) => void;
}


export interface ProfileState {
  firstName: string
  lastName: string
  email: string
  photo: string | null
  setField: (field: string, value: string) => void
  setPhoto: (base64: string | null) => void
}


export interface User {
  id:number,
  email:string,
  password:string
}





export interface LinkStore {
  linksArr: LinkItem[];
  showLinks: LinkItem[];
  addLink: (newLink: LinkItem) => void;
  updateLink: (updatedLink: LinkItem) => void;
  deleteLink: (id: number) => void;
  setShowLinks: (links: LinkItem[]) => void;
  setLinksArr: (links: LinkItem[]) => void;
}