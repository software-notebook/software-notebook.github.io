# Availability
A system is said to be available if it continues to serve its customer as expected.

- No Single point of failures
    - Murphy's law : If anything can go wrong, it will go wrong so plan for failures and have proper fallback plan.
    - Plan for Multiple Instances, Multiple Availability Zones, Multiple Data Centers
    - Active-Active vs Active-Passive Architecture
    - Disaster Recovery Plan
    - Capacity Planning of the critial resources
        - In case of high traffic, system can become unresponsive leading to failures and availability issues.
- Stateless Systems
    - Move the traffic from Instance A to Instance B in case of failures without any customer friction.
- [CAP Theorem](https://robertgreiner.com/cap-theorem-revisited/)
    - The CAP Theorem states that, in a distributed system (a collection of interconnected nodes that share data.), you can only have two out of the following three guarantees across a write/read pair: Consistency, Availability, and Partition Tolerance - one of them must be sacrificed.
- Fail Open vs Fail Close
    -   In case of failure, allow the customer to continue the business operations (e.g. allow customer to book order if inventory check fails instead of failing the order placement)
- Event Driven Architecture
    - The system will process the events as and when they are available as long as there is no message loss.

- Deployment Strategies - Avoid the bugs in new release that could impact the overall availability of the system.
	- Canary Release (one box testing)
		- Release is available to only few customers.
	- Blue / Black deployment
		- Traffic switchover between pool of services with new release artifact.
			- Traffic is redirected back to old in case of issues.
    - Ramp strategy
    - Feature toggling


<details>
  <summary>Availablity in numbers</summary>

| Percentile | Downtime per year |
|----------  |----------------------|
| 99%        | 87 hours, 40 minutes | 
| 99.5%      | 43 hours, 50 minutes | 
| 99.9%      | 8 hours, 46 minutes  | 
| 99.95%     | 4 hours, 23 minutes  | 
| 99.99%     | 52.6 minutes         | 
| 99.999%    | 5.26 minutes         |

</details>


