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
    - Distributed Locks
        - The lock has a timeout (i.e. it is a lease) so that if a service / client is down then it doesn't end up holding a lock forever and never releasing it. 
        
Latency
- One of the most devastating and unpredictable latency intruders is the Java Virtual Machine’s (JVM’s) “stop the world” pauses for garbage collection (memory clean-up). [HBase - Tuning Garbase Collection](https://blog.cloudera.com/tuning-java-garbage-collection-for-hbase/)
- strong consistency causes performance and latency issues as well. Each write is more expensive, especially with cross-datacenter replication, as it needs the acknowledgment of multiple replicas. 
- Dependencies 
    - Downtream services and databases - (sequential vs parrallel invocation)
    - Libraries (performance, compute time)

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
    - Read heavy vs write heavy
        - Command Query Responsiblity Segregation - CQRS.
        - Replication (read replicas)
    - Database paritioning
        - Horizontal Parition - Table Data (rows) is sharded across multiple instances based on certain keys (e.g. US customer in shard A, IN customer in shard B)
        - Verification Parition - Tables in a databases are split across multiple instances (e.g. Customer table in instance A and Customer Order table in instance B)
    - [Connection Pooling](https://www.cockroachlabs.com/blog/what-is-connection-pooling/)
API Design
    - Bulk APIs - Helps in performing same operation for multiple requests.
    - Pagination - Helps in client iteratively use the data.
    - GraphQL - Load what you need.
    - Bulk Head Pattern to keep specific API
	    - Threads per API for avoiding resource starvation
Events
    - Fire and Forget
	    - Use events for the tasks that are not needed immediately.
## Cache
There are two key intents of using the cache:
1. Cache as primary storage

This approach can be used where we have to store some some transient, fast-changing data, and where it’s not a big deal if you occasionally lose that data for whatever reason. In this case, there is no other storage.
Examples : Request counters per IP address (for rate limiting purposes) or Distinct IP addresses per user ID (for abuse detection).

2. Cache as supplimentary storage

This approach is used for reducing the latency and for reudcing the load on primary storage. In this case, cache is filled from primary storage source for the data that gets accessed very frequently.
Examples : Storing the session information per customer for authentication and authorization.


### Cache Policies :
#### Time to Live Policy
- A short TTL could lead to more cache miss leading to performance and latency issues.
- A long TTL could lead to memory issue as there will be more keys in the momory.

In case of TTL policy, the data staleness should also be considered. If data is being updated by other processes then this approach might serve old data to the customers.

#### Least Frequently Used Policy
- The keys that are being used least frequently will be cleaned up for keeping the memory footprint optimized.

In this case also, the staleness of the data has to be kept in mind. If a key has very high frequency then we will have to think about the mechanism for updating the values.

