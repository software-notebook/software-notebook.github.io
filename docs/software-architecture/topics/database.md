# Database Notes

## Query Driven Data Model
- If an application has high volume for read traffic then its better to consider [Query Driven Data Model](https://hackolade.com/help/Query-drivendatamodelingbasedona.html) as this approach has better performance because 1. All the data is co-lated in the same disk/partition 2. All the data is part of same lookup document so no joins are data stiching is required at run-time.
