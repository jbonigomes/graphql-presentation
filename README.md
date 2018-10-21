# GraphQL presentation

    $ yarn start

# Speech

1.0: Hi everyone, I'm going to talk about GraphQL. It's a great tool, hope I can
inspire you all to use GraphQL.

2.0: My name is Jose, I am a JavaScript engineer for the cards team, fell free
to reach out.

3.0: GraphQL is large topic, we only have time to scratch the surface, you may
follow those links if you are interested in knowing more. We will only talk
about what it actually is, where it comes from and how could we go about using
it.

4.0: So, what is GraphQL.... I tried to summarise it in one sentence, the best I
could do was to say that it's somewhat a replacement for REST. They try to solve
the same problem, be an API layer between your data source and the rest of the
world. What I can categorically say though, is that GraphQL is NOT a Graph
database, it can be used with a graph data, it is database agnostic, in fact,
your data source may not even be a database, it could be a rest api, another
graphQL database or even a combination of those.

4.1: Ok, we've all seen this, the early days of web applications, client
requests the app, server responds with the entire content, repeat, repeat,
repeat. This works great until things like, mobile apps, come in to play.

4.2: REST solves it by creating stateless API enpoints that can be consumed by
different types of apps allowing them to CRUD data. Apart from the increased
complexity, one obvious problem with that is scaling large API's, they have a
direct impact on client apps.

4.3: GraphQL acts as a data source broker, between various datasources, exposing
a consisten API that can be consumed by different apps.

4.4: If you haven't already seen it, this is the Star Wars API, it's a REST API
that allows you to query information about the Star Wars movies, for example,
/people/1 will return information about Luke Skywalker.

4.5: The same data can be accessed via a GraphQL counterpart, this example is
querying some information about the title 'A New Hope'. What we are looking at
is a tool called GraphiQL, it's like Postman for GraphQL. There are other more
modern alternatives, such as GraphQL Playground too but the concept is the exact
same, because our schema is strongly typed, we can see our entire data structure
and know from a glance how to query it, what parameters to use etc... In the
left we have the actual query which in turn uses variables declared right below.
In the middle, we have the actual query results and they follow the exact
structure described in the query. There is no overfetching or underfetching of
data.

4.6: It's all http, so, we could achive the same with a get request such as this
one, and sure enough, we get exactly what we requested.

4.7: The same query can be achieved via REST, like so. If our goal was to only
fetch the movie titles we can clearly see the amount of data that will be simply
disregarded.

4.8: Traditinal API's are getting better too, but it feels a little like an
after thought, they haven't been built from the ground up to face the data
demands of todays apps.

5.0: The very reason for GraphQL's existence come from Facebook's need to
developing a mobile app along with the competition with Google+. Google had top
notch engineers and didn't have to deal with any technical debt. They had an
ubiquitous app and were moving really fast. GraphQL was Facebooks response to
it. They had to deal with a legacy app and yet, innovate really fast. GraphQL
was designed to cope with an ever evolving application, instead of re-writting
it from scratch every time new tools and practices emerge, GraphQL's philosophy
is to serve as a wrapper that can is agnostic from its data source. Existing
API's, data and business logic remains untouched as GraphQL is gradually
integrated.

5.1: It was created by Lee Byron in 2012 and released to the general public in
2015. Lee Byron has now left Facebook, but he worked along side Dan Abramov the
creator of Redux and Jordan Walke, the creator of React. Dan Abramov is actually
based in London as opposed to California, but they finish each other's
sentences. Historically speaking, Facebook created Flux, a philosophy around how
data should flow in a web application. Flux was a replacement for MVC and had
several different implementations, the final clear winner was Redux, it was so
good Facebook contracted him, GraphQL builds on top of the same concepts praised
by Redux or one way data flow, pure functions and immutable data structures. Lee
Byron is also the creator of Immutable.js. They all have a common goal, which is
to empower developers with better tools to create applications.

6.0: Much like REST, GraphQL is a concept, implementations look a bit like an
ORM and among others, can be found for: Javascript, Ruby, PHP, Python, Java,
C/C++, Go, Scala, Perl, .NET, Erlang, Elixir, Haskell, SQL, Lua, Clojure, Swift,
OCaml, ReasonML, Rust, R, Kotlin, Unity... You don't need use any specific
implementation, but doing so has several advantages, such as data normalisation
and caching validation.

6.1: For the client side, my two favourite clients are Apollo and Relay. Relay
is Facebooks take on a GraphQL client, but it's limited to React only and have a
fairly steep learning curve. Apollo was created by MDG, the same company behind
Meteor.js, it has a much lower entry barrier and works with any JS framework,
even vanilla js as well as native iOS and Android. In my opinion, Apollo is the
best option for a client GraphQL.

6.2: Apollo also have a server side layer, it is very simple and JavaScript
based. However, comparing to Prisma, it may feel a little too hands on. Prisma
is written in Scala and supports all flavours of JavaScript as well as Go.

6.3: So, let's see how a GraphQL server might look like using the more hands on
Apollo.

6.4: schema

6.5: resolvers

6.6: client config

6.7: Yes, we never ever have to write an Ajax request, ever again. We simply
declaratively describe the data our component needs and let Apollo do the rest.

6.8: If your Prisma client is in the same region as your Prisma server, then the
latency is negligible. It has great support for real time data. It can generate
your GraphQL API directly from your schema, no need to write resolvers. Fast and
secure, great engineering team, received a round of investmend of $4.5 million.

6.9: Authentication and Authorisation

7.0: Is graphQL for me? To my mind, almost always, yes. But with some caveats.
It was only release to the public in 2015, just about 3 years old, it is pretty
stable, but as everything in the edge of tech, new patterns and tools are always
emerging. It does not have great support for file management. It works for those
guys.

7.1: Recap
