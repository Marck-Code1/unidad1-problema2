export interface BookReference {
    numFound:          number;
    start:             number;
    numFoundExact:     boolean;
    num_found:         number;
    documentation_url: string;
    q:                 string;
    offset:            null;
    docs:              Doc[];
}

export interface Doc {
    author_key?:           string[];
    author_name?:          string[];
    cover_edition_key?:    string;
    cover_height?:         number;
    cover_i?:              number;
    cover_width?:          number;
    ebook_access:          EbookAccess;
    edition_count:         number;
    first_publish_year?:   number;
    has_fulltext:          boolean;
    ia?:                   string[];
    ia_collection?:        string[];
    key:                   string;
    language?:             string[];
    lending_edition_s?:    string;
    lending_identifier_s?: string;
    public_scan_b:         boolean;
    series_key?:           string[];
    series_name?:          string[];
    series_position?:      string[];
    title:                 string;
    subtitle?:             string;
}


export type EbookAccess = "borrowable" | "no_ebook" | "printdisabled" | "public";