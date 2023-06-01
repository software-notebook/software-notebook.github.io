# Availability
A system is said to be available if it continues to serve its customer as per business needs. A business use case in some cases might require the system to be available from Monday to Friday while in another case, it might required to be available 24x7 with 99.99% availablity.

We should keep following points in mind for high availability:
- **No Single point of failures** - There are common single points of failures that are easy to figure out such as Database failure, Service failure etc and we have fall-back strategies for such failures but we shall look into the **critical path** and identify the parts of the system that if fails or have degrageded performance can bring the entire system down.  


- **Murphy's law** : If anything can go wrong, it will go wrong so don't assume anything and plan for worst case. 

## Interesting Stories
There are few things that we as human being can't think about but it had caused downtime in past. Here are some interesting ones :
-  **Squirrel takes down Yahoo's Santa Clara data center** - In 2010, “A frying squirrel took out half of our Santa Clara data center,” said Mike Christian, who runs business continuity for Yahoo, during a keynote at the O’Reilly Velocity conference.
- **The leap second bug** - The world atomic clock is occasionally adjusted to add one second on account of variations in the rotation speed of the Earth. This one second caused so much flutter in global IT systems, it brought down popular websites, including LinkedIn. Read [this article](https://www.wired.com/2012/07/leap-second-glitch-explained/) for more details.
- **Ship anchor disrupts Web Services**- In the year 2008, a ship accidently dropped its 2 tonne anchor on the under sea cables which carried traffic from continent to continent.
- **Rackspace downtime due to a truck** - In the year 2007, Rackspace, a company with a phenomenal high uptime record, suffered an outage for several hours after a truck drove into a power transformer which exploded.
- **Superstorm Sandy** - In October 2012, Hurricane Sandy struck United States of America and disrupted a number of businesses operating in and around Newark. 

## Major downtime reasons
- Human Error
- Hardware/Software Failure
- Device Misconfiguration
- Natural Disasters
- Cybersecurity Threats
- Bugs

## Strategies
- Disaster Recovery Plan
- Multiple Data Centers / Availability Zones / Instances
- Active-Active vs Active-Passive Architecture
- Capacity Planning for the critial resources as in case of high traffic, system becomes unresponsive leading to cascading failures and availability issues.
- Stateless Systems - This helps in migrating the traffic without any side effects.
- [CAP Theorem](https://robertgreiner.com/cap-theorem-revisited/)
    - The CAP Theorem states that, in a distributed system (a collection of interconnected nodes that share data.), you can only have two out of the following three guarantees across a write/read pair: Consistency, Availability, and Partition Tolerance - one of them must be sacrificed.
- Fail Open vs Fail Close
    -   In case of failure, allow the customer to continue the business operations (e.g. allow customer to book order if inventory check fails instead of failing the order placement)
- Event Driven Architecture
    - The system will process the events as and when its available as long as there is no message loss.
- Deployment Strategies - Avoid the bugs in new release that could impact the overall availability of the system.
    - Canary Release (one box testing)
        - Release is available to only few customers.
    - Blue / Black deployment
        - Traffic switchover between pool of services with new release artifact.
            - Traffic is redirected back to old in case of issues.
    - Ramp strategy - Roll out new feature to 1% of the population.
    - Feature toggling - Toggle the feature on/off with config.
## Availablity In Numbers

<details>
  <summary>Percentile vs Downtime per year</summary>

| Percentile | Downtime per year |
|----------  |----------------------|
| 99%        | 87 hours, 40 minutes | 
| 99.5%      | 43 hours, 50 minutes | 
| 99.9%      | 8 hours, 46 minutes  | 
| 99.95%     | 4 hours, 23 minutes  | 
| 99.99%     | 52.6 minutes         | 
| 99.999%    | 5.26 minutes         |

</details>


