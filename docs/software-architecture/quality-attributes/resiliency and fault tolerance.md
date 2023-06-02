# Resiliency and Fault Tolerance


Use Retries, Circuit Breakers etc.
 - Helps in avoiding intermittent failures (e.g. network connections, timoout etc.)
 - Use Idempotency Mechanism for consistency and relaiblity.
> Idempotency - A service is said to have the idempotence characteristic if the same input being thrown at it multiple times does not change its state unexpectedly.
 - Avoid retry storming
	- A->B->C->D if Retry count of 4 is set across A,B,C,D and if failure happens at D then D would be retried 64 times. 
		- Think about circuit breakers
		- Do rate limit as you can't control how many times client is going to retry..
	- Ref for details: https://link.medium.com/Su8jHHAVrib
- Configure Timeouts for gracefully failing the stuck requests.
	- request timeout — a time period required to process an HTTP call: from sending a request to receiving a response.
	- connection timeout — a time period in which a client should establish a connection with a server.
	- socket timeout — a maximum time of inactivity between two data packets when exchanging data with a server.


- Transient faults : These faults are often self-correcting, and if the action is repeated after a suitable delay it is likely to succeed.
	-  momentary loss of network connectivity to components and services, 
	- the temporary unavailability of a service, 
		- application crashes,
			- run out of memory
		- the server it is running on might be abruptly terminated
	- or timeouts that arise when a service is busy. 

- Reduce blas radius
- correctly propagating the fault status.
- consider the following dimensions of failure:
	- faults at an infrastructural level (like network failure), as well as faults at an application level (like uncaught exceptions or panics).
		- If instances of services X, Y and Z always run together on the same host, then if X can run amok and “poison” its host, X will always take the same neighbours with it, Y and Z, regardless of how many instances you have.
	- faults that are intrinsic to the software we build (caused by us, i.e. bugs) as well as those that are extrinsic (caused by others e.g. invalid messages).

- Avoid Resource starvation
    - if Multiple Apis are sharing the same thread poll and if one of the api has degraded latency then it can slow down other apis as well leading to timeouts etc. As an example, a downstream service is taking more time then expected for a given api then threads will have to wait longer. In this case, bulk-head pattern can be followed along with other resiliency strategy e.g. timeouts.
- chaos engineering
    - inject faults into the system and observ the behaviour for finding out the gaps.


# Refererences
[Netflix - Fault Tolerance in distributed systems](https://netflixtechblog.com/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a)