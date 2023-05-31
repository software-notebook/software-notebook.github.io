# Performance

A system is considered to be performance ability if it continues to serve the desired functionality as per the pre-defined SLAs without any degration.

Exmaples:
 - A system is perfomrant if the response time, throughput (number of requests per second)for an API continues to be as per 95% and 99% percentile SLAs.
 - On the hand, if systems performance continues to degrade e.g. due to memory leaks, resource starvation etc then it would exhibit non-performant behaviour.


Resources and Bottlenecks
    - Sharing
        - Threads - Common Thread Pools across all APIs in a service.
        - Machine Instance  - Multiple services in a same host machine.
        - Disk
        - Database Connections
    - Metrics
        - Query per seconds
        - Requests per seconds
    - Locks
        - Optimistic Lock
	        - Acccess the resource with version, perform the business operation, update the resource for same version,  if version mismatch then abort the flow.
	    - Oultiple threads can enter and access the same resource.
	    - Doesn't work with multi data center architecture..
	        - If request for two diff users go to two diff data center then both will get procssed locally..
        - Pessimistic Lock
            - Acquire the lock on the resource, perform the business operation, update the resource, release the lock on the resource.
        

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
    - Single Data Center vs Multiple Data Center
    - Consistency vs Eventual Consistency
        - eventual consistency is problematic for read-after-write use-cases.
API Design
    - Bulk APIs - Helps in performing same operation for multiple requests.
    - Pagination - Helps in client iteratively use the data.
    - GraphQL - Load what you need.
    - Bulk Head Pattern to keep specific API
	    - Threads per API for avoiding resource starvation
Events
    - Fire and Forget
	    - Use events for the tasks that are not needed immediately.
Cache
    -  Helps in reducing the load on databases
    -  Helps in faster turn-around because of in-memory data access
