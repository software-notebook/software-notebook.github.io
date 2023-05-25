# Performance

A system is considered to be performance ability if it continues to serve the desired functionality as per the pre-defined SLAs without any degration.

Exmaples:
 - A system is perfomrant if the response time, throughput (number of requests per second)for an API continues to be as per 95% and 99% percentile SLAs.
 - On the hand, if systems performance continues to degrade e.g. due to memory leaks, resource starvation etc then it would exhibit non-performant behaviour.



Resources and Bottlenecks
    - Sharing
        - Threads - Common Thread Pools across all APIs in a service.
        - Machine Instance  - Multiple services in a same host machine.
        - Disk - 
    - Metrics
        - Query per seconds
        - Requests per seconds

Dependencies
    - Downtream services and databases
    - Libraries

Core Application Logic
    - Utlisization of Resources for the given business use case
        - CPU Bound - Blockchain, Crypto
        - Memory Bound - Data Science
        - I/O Bound - Web crawling
    - Code / Algorithm Compexlity
        - Runtime Complexity
        - Space time complexity

Database
    - Indexing - Helps in querying the data in optimal way.
    - Read replicas - Helps in reducing the load on main database (#shared-resources)
Cache
    -  Helps in reducing the load on databases
    -  Helps in faster turn-around because of in-memory data access
