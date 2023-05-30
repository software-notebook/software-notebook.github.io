# Scalability

A system is considered to have scalability attribute if it is able to manage additonal work-load without causing any design changes. 

> A service is said to be scalable if when we increase the resources in a system, it results in increased performance in a manner proportional to resources added, - Werner Vogels

Exmaples:
 - A system is scalable if it is able to serve increasing traffic (e.g. from 1x to 2x and then 2x to 3x) without any changes in architecture.

- Shared resource constraints (e.g. database)
	- It is pointless scaling a service up to 10 instances when a back-end datastore will only accept enough connections to support 3. In fact, scaling out services can be hazardous when it exposes other components to load that they are unable to support. Increasing capacity in one part of the system can degrade the system as a whole.
 - Peak hours (lunch time for social networking sites or ecommorce sites)
	- food order app - lunch time, dinner time, weekends
	- rides - office hours
 - Scale Cube [Art of Scalaiblity](https://akfpartners.com/growth-blog/scale-cube)

- Methods
    - Horizontal Scalability - The instrastructure is scalled by adding more and more instances. E.g. A bigger room has multiple Aircons for tempature control.
    - Verifical Scalability - The infrasturcutre is upgraded so that it has  more Compute, Storage or Memory. No of instances remains thes same. E.g. A bigger room has Aircon that has 4X temparature control power than previous one.

## Databases
    - Single Master Database
    - Master and Read Replicas
    - Master and Slave
    - Distributed Database (Quorum)
    - Database Partitions
    - Access Pattern
        - SQL
        - NOSQL
    - Ready Heavy
        - Query as the first class citizen
    - Write Heavey
        - Write Ahead Log - Casandra
    - Command Query Responsibility Seggregtation - CQRS
        + Helps in scaling the read and write traffic in a isolated manner.
        - Adds complexity and matainence work. 
        - Doesn't work well for read-after-write use cases.

    - Structure of the data
        - Structured Data
            - Normalized tables in SQL could lead to more joins and might create scalability if Query / Seconds reaches certain thresholds.
            - Index plays a critical part for lookups.
                - Avoid full table scan.
        - Unstructured Data
            - Possible to design the data model as per database query
    - ACID vs BASE

## Events
    - Pupblish-Subscriber pattern
        - Add more consumers for managing the additonal load.
    - Fan out
        - A sizable task can be broken down into smaller ones that can be processed layer by the workers (consumers)


## Services
    - MicroServices Pattern
        - Allows the services to scale indepedenctly as per their scale needs.
    - No shared local state.
	    - local state means that the same customer's request will have to go through same machine or instance so if huge traffic is there for hot key (celebrity) than machine might not be able to handle the load.
        
# Deployment Strategies     
    - Auto scalability
        - Automically provision the new instances to serve more traffic.
    - Multi Data Centers and Avaliablity Zones
        -  Enables you to serve traffic across the world with minimal impact.
    