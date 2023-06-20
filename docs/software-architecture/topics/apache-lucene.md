# Apache Lucene
Apache lucune provides the key capabilities for indexing and searching. It is used by ElasticSearch and [Apache Solr](https://solr.apache.org/)


## Taxonomy
**Document** - Document contains the info that is required be indexed and searched. E.g. A web page, a tweet etc.

**Query** - Query is the search phrase.

**Term** - A query consists of terms (tokens) that are used for search. [the unit of search]

**Inverted index** - Inverted index is a data structure that maps terms to the documents.

## High Level Overview

Lucene provides two core capabilities:

** Indexing ** - The documents that are required to be searched are ingested into the lucene for creating the inverted indexes.

** Searching ** - The query provided by the client is tokenized into terms and then lucne uses these terms for the look up using the inverted indexes. Lucene can also keep track of the term frequency etc for giving relevant results.

```mermaid
graph TD
    client[Client]
    src[Source]
    subgraph Lucene
        lucene[Apache Lucene]
        index[Index]
    end
    subgraph Source
    src-- Documents - D1,D2,D3 --> lucene
    lucene -- Generate Indexes --> index[Index \n K1 : D1 \n K2 : D2,D3 \n K3:D3]
    end
    subgraph Search
    client -- Query --> lucene
    lucene -- Lookup Terms --> index
    end

```

## Low Level Overview

Lucene has multiple low level module that helps in performign the indexing and serach operations.

```mermaid
graph LR
    subgraph Analyzer
        Tokenizer[Tokenizer \n Split text into tokens]
        Filter[Filter \n Remove words such as - a, an, the]
        Converter[Converter \n Convert tokens into lower case]
        Stemmer[Stemmer \n normalize different form of the same word \n e.g. ran, running to run]
        SynonymHanlder[Synonym Hanlder \n Synonym handling \n e.g. huge, gigantic to big]
    end

  
    Source --Document--> Analyzer -- Tokens --> Index[Index Storage \n Index to Document Map]
    
```
```mermaid
graph LR
    subgraph Analyzer
        Tokenizer[Tokenizer \n Split text into tokens]
        Filter[Filter \n Remove words such as - a, an, the]
        Converter[Converter \n Convert tokens into lower case]
        Stemmer[Stemmer \n normalize different form of the same word \n e.g. ran, running to run]
        SynonymHanlder[Synonym Hanlder \n Synonym handling \n e.g. huge, gigantic to big]
    end

    Client -- Phrase --> Analyzer -- Terms--> Index[Index Storage \n Serach Results]
    
```
## Other Features
- Support for different Searching methods (Ranking, Sorting etc.)
    - Term frequency in document
    - Number of terms in the query that were found in the document
    - etc.
- Supports differnt Query types: phrase queries, wildcard queries etc.
- Multiple-index searching with merged results
- Support for simultaneous update and searching


## Distributed Index
- Document Based Parition - In this model, documents will be distributed to the nodes as part paritioning logic. In indexing phase, this node will do the local indexing of the document and keep the result of the inverted indexes. In search phase, all the nodes will be sent query for the result that will be 
merged later on.


```mermaid
graph
    subgraph Parition
        direction TB
        subgraph Node 1
            direction TB
            Doc1
            Doc2
        end
        subgraph Node 2
            direction TB
            Doc3
            Doc4
            Doc5
        end
        subgraph Node 3
            direction TB
            Doc6
            Doc7
            Doc8
        end
    end
```

- Term Based Parition
```mermaid
graph
    subgraph Parition
        direction TB
        subgraph Node 1
            direction TB
            Term1
            Term2
        end
        subgraph Node 2
            direction TB
            Term3
            Term4
            Term5
        end
        subgraph Node 3
            direction TB
            Term6
            Term7
            Term8
        end
    end
```
The parition could be based on hash values or key range (e.g. T1 to Tn goes to Node 1)

## References:

[Lucene](https://lucene.apache.org/core/)

[Blog](https://j.blaszyk.me/tech-blog/exploring-apache-lucene-index/)

[Elastic Search - Architecture](https://medium.com/geekculture/elasticsearch-architecture-1f40b93da719)

[Blog](https://levelup.gitconnected.com/lucene-search-engine-in-action-32146d5dab09)

