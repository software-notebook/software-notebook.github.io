# Domain Driven Design
## Taxonomies
### Aggregate
> An aggregate is a domain object that encapsulates the business rules (invariants) and provide the appropriate interfaces to the outside world
> for interacting with it for performing business operation. As an example, Order aggregates would have the required logic for accepting and rejecting the orders. 

> An aggregate in one domain can be a simple object in another domain. The customer aggregate in onboarding domain is just an entity in Order booking system for which order is going to be placed.

> As a general principle, a microservice should be no smaller than an aggregate, and no larger than a bounded context. 

> Domain objects should contain the business logic that are intrinsic to them, but they should not contain any other infrastructure logic and shouldn’t violate Single Responsibility Principle. **Source** - [Anemic vs Rich Domain Model](https://dzone.com/articles/anaemic-vs-rich-domain-objects-finding-the-balance)

> The change in aggregate state usually leads to a Domain Event that other domains can consume for performing the meaningful action.

> As a rule of thumb, a business transactions should not cross aggregate boundaries.

> An aggregate is different from value objects. The aggregate has thir own life cycle and states while value objects doesn't. A order might have the contact number and this content number could be differnet for different order and will not impact the order status.


### Bounded Context
> A business domain has well definied boundry and this boundry defines the business functions of the domain. This boundry is what is known as Bounded Context. All the domain specific langauge (taxonomy), rules, behaviour etc. are always consistent and well-known without any ambiguity inside the bounded context.
>
> Useful Refrences : [Bounded Context](https://martinfowler.com/bliki/BoundedContext.html)

[Context Mapping](https://www.infoq.com/articles/ddd-contextmapping/)



### Domain Events

## Webinars
<iframe width="560" height="315" src="https://www.youtube.com/embed/z8qhToMtYRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Articles!

[Microsoft - Domain Analysis](https://docs.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis)

[Microsfot - Tactical TDD](https://docs.microsoft.com/en-us/azure/architecture/microservices/model/tactical-ddd)

[Nick Tune - Mddelling the bounded context..](https://medium.com/nick-tune-tech-strategy-blog/modelling-bounded-contexts-with-the-bounded-context-design-canvas-a-workshop-recipe-1f123e592ab)


## Books!

<iframe type="text/html" sandbox="allow-scripts allow-same-origin allow-popups" width="250" height="350" frameborder="5" allowfullscreen src="https://read.amazon.com/kp/card?asin=B00794TAUG&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_18WQ5301C7RWM1XZW6FQ" ></iframe>


<iframe type="text/html" sandbox="allow-scripts allow-same-origin allow-popups" width="250" height="350" frameborder="5" allowfullscreen src="https://read.amazon.com/kp/card?asin=B00BCLEBN8&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_NZ8JM12CYJA25JEPTCMG" ></iframe>
