export class TalkoffResponse {
    Text: string;
    TalkoffTextId: number;
    CategoryName: string;
    ContentNavigationName: string;
    HasOptionalFreeFormText: boolean;
    }

export class Talkoff extends TalkoffResponse {
    IsSelected: boolean;
    OptionalFreeFormText: string;
    AssemblyText: string[];
    FormattedText: string;
}



