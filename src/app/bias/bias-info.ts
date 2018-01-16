import { Bias } from './bias.model';

export const CompletenessBias: Bias  = {
    id: "Completeness",
    parentId: "Observe Phase",
    definition: "The perception of an apparently complete or logical data presentation can stop the search for omissions.",
    oodaclass: "Observe Phase",
    oodasubclass: "Information Gathering",
    classreasoning: "Reasoning for class and subclass assignment: Completeness is related to how the information is ‘observed’ and whether further information will be gathered or not depending on the observation. The bias directly impacts the search for additional information especially in cases where there is a false sense of the gathered information being complete enough to move to the orient phase.",
    example: "NoSQL database selection: Mongo DB being one of the more popular NoSql database, brings a tendency for architects to decide on using it without gathering information about alternatives such as Couchbase, ArangoDB etc. This makes the selection pool for architecture decision incomplete.",
    impact: "Leads to illogical elimination of potential alternatives.",
    debias: "In the above example, the choice of MongoDB was made in a ‘naturalistic’ way. To ensure a rational selection process, creating a selection pool of candidate technologies along with their pros and cons makes information more complete leading to better decision-making.",
    relatedbias: [""]
};

export const ConfirmationBias: Bias  = {
    id: "Confirmation",
    parentId: "Observe Phase",
    definition: "Often decision-makers seek confirmatory evidence and do not search for disconfirming information.",
    oodaclass: "Observe Phase",
    oodasubclass: "Information Gathering",
    classreasoning: "Confirmation bias leads decision-makers to observe information to confirm the information which they already possess. Minimal effort put into seeking information outside cognitive boundaries. Bias results in gathering of additional information to confirm what is already known.",
    example: "NoSQL database selection:  An architect who has some knowledge about MongoDB would gather information to solidify claims for usage instead of gathering disconfirming information about other alternatives which could be useful.",
    impact: "Alternative not explored to the full extent to support a more rational decision-making.",
    debias: "While it is natural to seek additional information about known things, better decisions can be made by gathering equal data about unknown things as well. (outside comfort zone)",
    relatedbias: [""]
};

export const InformationBias: Bias = {
    id: "Information",
    parentId: "Observe Phase",
    definition: "Belief that furtherly acquired information generates additional relevant data, even when it evidently does not.",
    oodaclass: "Observe Phase",
    oodasubclass: "Information Gathering",
    classreasoning: "Information Bias leads to additional unnecessary ‘observations’. Architects believe that gathering additional information can lead to better decision-making despite all the information being already available.",
    example: "NoSQL database selection:  In the situation where enough information is available about NoSQL alternatives like Aerospike, Apache Ignite, MongoDB, Couchbase, FoundationDB, Oracle NoSQL DB, Redis etc. is available, architects tend to look for more information.",
    impact: "The additional information gathered adds no value and ends up wasting precious resources.",
    debias: "Make iterations when enough information is available about alternatives. Use available information to move to orient and decide phases instead of being paralyzed in observe phase. Loopback to observe phase in case there is a need for extra data.",
    relatedbias: [""]
};

export const LevelsOfProcessingEffectObserve: Bias = {
    id: "Levels-of-processing effect",
    parentId: "Observe Phase",
    definition: "That different methods of encoding information into memory have different levels of effectiveness.",
    oodaclass: "Observe Phase",
    oodasubclass: "Information Gathering",
    classreasoning: "",
    example: "Framework selection to develop a frontend application:  In the current technology scenario where there are so many web frameworks such as Angular, React, EmberJS, VueJS among others. The choice of framework selection for a use case is made based on the extent to which the architect was able to process the effectiveness of the framework when being used.",
    impact: "The selection process is dependent on cognitive limitations of the architect.",
    debias: "Evaluate the technologies which come to mind outside the boundaries of previous experience. Additionally, broaden the alternative list to include those technologies which don’t come to mind as well.",
    relatedbias: [""]
};

export const ReferenceBias: Bias = {
    id: "Reference",
    parentId: "Observe Phase",
    definition: "The establishment of a reference point or anchor can be a random or distorted act.",
    oodaclass: "Observe Phase",
    oodasubclass: "Information Gathering",
    classreasoning: "In the observe phase, information is obtained from different sources. There are multiple sources from which information can be obtained from. Based on the quality and relevance of the source, a reference point is established which sets the tone for the further steps of decision-making. A start point is set from where to gather information thereby influencing the decision-making process chain.",
    example: "Influence of external information sources: Generally, when designing the architecture for a new solution, architects conduct some research to gather as much information for decision-making. Every architect has specific sources from which they gather information such as Design Patterns-Source Making, Stack Overflow, information from colleagues, communities for specific technologies and others. A Reference point is usually established from which the architects try to build further knowledge.",
    impact: "Quality of the final decision depends on how well a reference point was established initially.",
    debias: "Establish formal parameters when gathering information from multiple sources based on a given context. Compare the information obtained using the parameters to then justify the selection of an information source as the reference point. This can also be made part of the decision logs for a project for people to understand the architecture decisions as a future reference.",
    relatedbias: ["Anchoring and Adjustment"]
};

export const SearchBias: Bias = {
    id: "Search",
    parentId: "Observe Phase",
    definition: "An event may seem more frequent because of the effectiveness of the search strategy.",
    oodaclass: "Observe Phase",
    oodasubclass: "Information Gathering",
    classreasoning: "The goal of the observe phase is to create a knowledge base for decision-making. Architects employ different search techniques for this purpose. Tendency is to gather information from sources which have higher frequency of certain search keywords which creates the illusion that the information being highly relevant in the context, even if it is not.  ",
    example: "Gathering information to select a technology for backend: Based on the current trends, Java and NodeJS are arguably the most popular backend technologies. However, there are other technologies such as Scala, Django, Ruby on Rails, Symfony and others which could be viable alternatives. When using search engines like Google, the information obtained depends on the usage of the search key terms. For example, searching for ‘high performance web application framework’ results in a direct link to Symfony being listed in the first page of Google results. While other links mention competing technologies, direct links to their home pages are noticeably missing from the first page.",
    impact: " It is quite common for developers to don the ‘hat of an architect’ especially in small companies with limited resources. Due to their inexperience they rely heavily on the information that can be found on the internet. Thus, the architecture decisions would then be driven by search results instead of having a more rational basis according to the scenario at hand. ",
    debias: "Use different sources such as books, forums and other avenues to search for information. Document the search terms used by different members to analyze the search strategies used.",
    relatedbias: [""]
};

export const FramingBias: Bias = {
    id: "Framing",
    parentId: "Observe Phase",
    definition: "Definition 1: The framing effect is an example of cognitive bias, in which people react to a choice in different ways depending on how it is presented.Definition 2: Events framed as either losses or gains may be evaluated differently.",
    oodaclass: "Observe Phase",
    oodasubclass: "Information Presentation",
    classreasoning: "Information is available to architects from various sources Requirements document from the requirements engineering phase, technology documents presented by sales personnel of the companies are some examples. All such information with different levels of framing bias is gathered during the observe phase. The framing of requirements influences presentation of information. ",
    example: "Example1: Framing of requirements document: The starting point for architects is generally the requirements document. They gather information for their decisions based on the requirements at hand. The manner in which the requirements are framed influences their understanding which affects their observations. Example2: Advertisements about technical solutions: In many cases, advertisements from companies are framed in a way to influence the end user to use their products. This is the same with companies which sell technology solutions as well. ‘Loss Framing’, ‘Gain Framing’, and ‘Statistical Framing’ are generally associated with advertisements.",
    impact: "In the first situation, it is important for an architect to understand the requirements correctly to design the right solution. Otherwise, the resulting solution will not be able to match the requirements. In the second situation, it is often the case that companies are ‘duped’ into buying solutions under the impression that it will fit their requirements.",
    debias: "The person framing the information documents must keep the readers in mind and in what ways the information can be interpreted. Sufficient communications must be held with the architects to make the requirements clear. When buying external solutions or investing in third party technologies, one must try and create a set of parameters against which different solutions can be compared with. Getting reviews, having a trial period, conducting rigorous proof-of-concepts are some ways to avoid getting into the framing bias trap.",
    relatedbias: ["Mode (The mode and mixture of presentation can influence the perceived value of data)", "Similarity"]
};

export const SimilarityBiasObserve: Bias = {
    id: "Similarity",
    parentId: "Observe Phase",
    definition: "The likelihood of an event occurring may be judged by the degree of similarity with the class it is perceived to belong to. ",
    oodaclass: "Observe Phase",
    oodasubclass: "Information Presentation",
    classreasoning: "Gathering of information is usually based on how much a person. Information at hand can seem similar to previous information due to the way in which it is presented. ",
    example: "Setup a static website: When setting up a static website, there is no need for a database connection. However, in cases involving inexperienced developers, they would setup a website with a database connection simply because the requirement sounded similar to previous work. ",
    impact: "Due to similarity of information, architects tends to take the same decisions as they did in the past when presented with similar information. This may or may not be the right solution. ",
    debias: "Everyone banks on previous experience when taking decisions. However, treating every scenario as a different use case would lead to exploring of new possibilities.",
    relatedbias: ["Framing"]
};

export const BaseRateFallacy: Bias = {
    id: "Base rate fallacy",
    parentId: "Orient Phase",
    definition: "The tendency to ignore base rate information (generic, general information) and focus on specific information (information only pertaining to a certain case).",
    oodaclass: "Orient Phase",
    oodasubclass: "Information Filtering",
    classreasoning: "The information gathered from the observe phase is subject to processing and interpretation during the orient phase. It is common to filter out and focus on specific information during the orient phase due to various reasons such as too much information, time pressure, cognitive limitations and other reasons. ",
    example: "",
    impact: "",
    debias: "Place equal importance initially to all information available. Filter out information of less importance and document the reasons for focusing on specific information for future reference. ",
    relatedbias: ["Anchoring and Adjustment", "Focusing Effect"]
};

export const AvailabilityHeuristic: Bias = {
    id: "Availability Heuristic",
    parentId: "Orient Phase",
    definition: "Definition 1: The tendency to overestimate the likelihood of events with greater 'availability' in memory, which can be influenced by how recent the memories are or how unusual or emotionally charged they may be. Definition 2: The availability heuristic is a mental shortcut that relies on immediate examples that come to a given person's mind when evaluating a specific topic, concept, method or decision.",
    oodaclass: "Orient Phase",
    oodasubclass: "Previous knowledge/experience",
    classreasoning: "In naturalistic decision making, architects rely on mental shortcuts which when evaluating the information gathered from the observe phase. The mental shortcuts result from their years of experience. ",
    example: "",
    impact: "",
    debias: "Counting on previous experiences and mental shortcuts to design solutions is part of naturalistic decision making. As with any bias related to experience, it is important to make sure that the interpretation from a previous scenario is applicable to the current scenario and to justify it so as to move to bounded rationality.",
    relatedbias: [""]
};

export const SimilarityBiasOrient: Bias = {
    id: "Similarity",
    parentId: "Orient Phase",
    definition: " The likelihood of an event occurring may be judged by the degree of similarity with the class it is perceived to belong to.",
    oodaclass: "Orient Phase",
    oodasubclass: "Semblance",
    classreasoning: "Similarity bias is relevant in the context of orient phase when information at hand feels similar to information obtained from a previous use case. As an architect, the tendency is to automatically interpret the information in the same manner due to the similarity to make design decisions.  ",
    example: "",
    impact: "",
    debias: "Seek more information to distinguish the current requirements with similar ones to avoid applying the same solution simply due to similarity. ",
    relatedbias: ["Distinction(The tendency to view two options as more dissimilar when evaluating them simultaneously than when evaluating them separately)"]
};

export const FunctionFixedness: Bias = {
    id: "Functional Fixedness",
    parentId: "Orient Phase",
    definition: " Limits a person to using an object only in the way it is traditionally used.",
    oodaclass: "Orient Phase",
    oodasubclass: "Previous knowledge/experience",
    classreasoning: "Often, architects prefer to rely on tried and tested methodologies to design solutions. This is especially true in the case of highly experience architects with less preference towards innovation to stick to well-known strategies based on their previous experiences. ",
    example: "Developing a desktop application: There are many different technologies to develop desktop applications. Traditionally, languages such as C#, Objective C, Swift are used to develop native desktop applications for Windows and Mac OS as the languages exists for such a purpose. However, this leads to development and maintenance of two code bases. In many cases, the same applications which do not require access to native drivers can be developed using Java. For developing the GUI, JavaFX is a reasonable choice. With the emergence of Electron, developing container applications for desktop has become a reality. Web application can be developed using Java frameworks such as SpringBoot and packaged with Electron to develop dynamic desktop applications.",
    impact: "Technologies are constantly evolving due to ever changing requirements. This implies that using a technology need not be restrained to how it was being used in a traditional sense. Sometimes simple solutions can be developed by using an existing technology innovatively instead of investing resources in developing more complex solutions through other technologies. ",
    debias: "Do not always associate certain use cases with specific technologies. Keep in mind the existing technology stack and the skill sets of the team and conduct some proof of concepts to verify if the existing technology can be leveraged to tailor a solution.",
    relatedbias: ["Law of the instrument"]
};

export const GoogleEffect: Bias = {
    id: "Google Effect",
    parentId: "Orient Phase",
    definition: "The tendency to forget information that can be found readily online by using Internet search engines.",
    oodaclass: "Orient Phase",
    oodasubclass: "Previous knowledge/experience",
    classreasoning: "Search engines are becoming increasingly powerful over time. Irrespective of the domain of work, people are reliant on search engines such as google for information. The ease of obtaining information has a downside – people tend to forget the easiest of things leading to what some people term as ‘digital amnesia’. Based on the requirements document, architects use their previous experiences to come up with solutions. Due to cognitive limitations of the mind, it is not always possible to remember all the information and the tendency to forget is more profound due to the influence of search engines. Search engines cannot have all the answers and judgements are often anchored to the information presented by the search results.",
    example: "Forgetting how one previously coded a solution: Due to the Google Effect, we tend not to commit data to memory simply because we know that it can be found online. This is quite true in cases when writing some complex code snippets. If the snippet can be found online, the easiest solution is to reuse the code and often developers do not bother to understand the logic behind it as long as there is a working solution.",
    impact: "Based on the example, a dependency is developed on the source from where the solution was copied. When a similar situation presents itself in the future, the tendency would be to search online for the code snippet instead of being able to code it themselves. It also results in complacency in developers as they fail to double check if the code is applicable and passes all the border test conditions.",
    debias: "Using more than one search engine would provide more perspective as each search engine has their own way of ranking search results. Some basic documentation consisting of decision logs, previously gathered information which is crucial and some first level analysis about the information.",
    relatedbias: ["Levels-of-processing Effect"]
};

export const LawOfTheInstrumentOrient: Bias = {
    id: "Law of the instrument",
    parentId: "Orient Phase",
    definition: "An over-reliance on a familiar tool or methods, ignoring or under-valuing alternative approaches.",
    oodaclass: "Orient Phase",
    oodasubclass: "Previous knowledge/experience",
    classreasoning: "As the definition suggests, this bias leads to an over-reliance on familiar tools and methodologies. The familiarity with tools is due to previous experience in using them which creates a comfort zone leading to a higher tendency to use them.",
    example: "Selection of continuous integration tool: There are many tools for continuous integration available in the market. Jenkins being one of the most popular CI tools would be the preferred choice of many without other alternatives such as Travis, Bitbucket Pipelines, GitLab CI and others being justly considered. ",
    impact: "Overly relying on tried and tested methodology leads to a one size fit all approach which does not work in every context. Moreover, it restricts innovation as new technologies with different approaches are not considered. ",
    debias: "As an initial step, conduct brainstorming sessions and create a list of alternatives based on inputs from all members of the team as well as some external sources. Rank the alternatives based on educated discussions. Based on the time constraints, conduct some proof of concepts if feasible to fairly compare all the options.",
    relatedbias: ["Functional Fixedness", "Mere exposure effect"]
};

export const LevelsOfProcessingEffectOrient: Bias = {
    id: "",
    parentId: "Orient Phase",
    definition: "",
    oodaclass: "",
    oodasubclass: "",
    classreasoning: "",
    example: "",
    impact: "",
    debias: "",
    relatedbias: [""]
};

export const MereExposureEffectOrient: Bias = {
    id: "Mere exposure effect",
    parentId: "Orient Phase",
    definition: " The tendency to express undue liking for things merely because of familiarity with them.",
    oodaclass: "Orient Phase",
    oodasubclass: "Previous knowledge/experience",
    classreasoning: "As the definition suggests, this bias leads to an over-reliance on familiar tools and methodologies. The familiarity with tools is due to previous experience in using them which creates a comfort zone leading to a higher tendency to use them.",
    example: "AWS is arguably the biggest cloud computing service provider at the moment. When setting up a cloud based infrastructure for projects, AWS is the preferred choice for many simple because they are familiar with it. Alternatives such as Google Cloud, Microsoft Azure and others could be viable alternatives in many cases.   ",
    impact: "People prefer to try and use the same approach and technologies for all situations without rationally considering alternatives.  ",
    debias: "As in the case of law of the instrument, the approach to debiasing would be to create an alternative list and rank them based on pros and cons. Depending on time constraints, quick proof of concepts can be done to aid in making the final decision.",
    relatedbias: ["Functional Fixedness", "Law of the instrument"]
};

export const BandwagonEffectOrient: Bias = {
    id: "Bandwagon Effect",
    parentId: "Orient Phase",
    definition: "The tendency to do (or believe) things because many other people do (or believe) the same. Related to groupthink and herd behavior.",
    oodaclass: "Orient Phase",
    oodasubclass: "Trends",
    classreasoning: "External trends have an impact when a decision-maker is orienting based on the information at hand. The effect is more profound when there are a high number of alternatives or in cases where there is a large tendency to use new technologies.",
    example: "Javascript framework selection:  This is one of the most common examples in the recent years. The emergence of numerous Javascript frameworks and libraries such as Angular, React, Vue, Ember and so on has lead to a ‘selection headache’ for architects.",
    impact: "While a large number of options to choose from is good to have, every new technology has a peak when the number of users spike up in a short time period. During the time frame, the general tendency would be to choose the options which is booming in the market and it makes it hard to make rational choices.",
    debias: "Do not discard ‘legacy’ technologies just because of market trends. When it comes to new technologies, often the spikes in the number of users are short lived. Other factors such as future support, number of contributors, verifying if the framework can support all the requirements should be considered carefully before making decisions.",
    relatedbias: ["Anchoring and Adjustment"]
};

export const AttenuationBias: Bias = {
    id: "Attenuation",
    parentId: "Decide Phase",
    definition: "A decision-making situation can be simplified by ignoring or significantly discounting the level of uncertainty.",
    oodaclass: "Decide Phase",
    oodasubclass: "Complexity",
    classreasoning: "From the definition, it can be inferred that discounting of information occurs when dealing with options which are commonly associated with high complexity. Less complex options have less uncertainty associated with them since all the details related to them is easily perceived. More complex options result in a lack of complete understanding leading to increased complexity and uncertainty and are often dealt with by making assumptions.",
    example: "Capturing audio from external devices connected to desktops: This is a common use case when it comes to audio streaming applications wherein sound has to be captured from external audio equipment connected to desktops. Some alternatives include Java Sound, Port Audio, MMDevice API and so on. ",
    impact: "Most of these options have the capabilities to capture sound from microphone and some basic audio equipment quite easily. However, when it comes to dealing with more complex devices with multiple channels, some of these options are not sufficient. The decision is quite tricky to make especially for a person with lack of experience in the sound domain and the tendency would be to choose an option which may be able to handle most use cases. However, it may fail when it comes to border cases which may contain added complexity. ",
    debias: "Ensure the chosen alternative is capable of handling complex scenarios. The varying degree of uncertainty involved results in certain assumptions being made. It is imperative to make a list of such assumptions and perform some quick proof of concepts to validate the assumptions before making the decision to deep dive into the implementation. ",
    relatedbias: ["Complexity"]
};

export const HardEasyEffect: Bias = {
    id: "Hard-easy effect",
    parentId: "Decide Phase",
    definition: "Definition 1: Based on a specific level of task difficulty, the confidence in judgments is too conservative and not extreme enough. Definition 2: The hard-easy effect is a cognitive bias that manifests itself as a tendency to overestimate the probability of one's success at a task perceived as hard, and to underestimate the likelihood of one's success at a task perceived as easy.",
    oodaclass: "Decide Phase",
    oodasubclass: "Complexity",
    classreasoning: "The hard-easy effect comes into play when options in the list of alternatives comprise of varying complexities. The general feeling is that by choosing a more complex alternative, it will yield in a higher success rate as compared to choosing an easier alternative.",
    example: "Kubernetes for automated deployment and scaling of a website: With the rise of Docker around 2013, Kubernetes has gained traction in the recent years as the choice for automating deployments and scaling of container based applications. Kubernetes is a good choice when it comes to setting up complex websites which handle a large user base, and which requires a high degree of availability. However, setting up the Kubernetes is not a simple task for someone with limited experience. Additionally, when dealing with simple websites with a limited user base, a simple solution with Jenkins would probably suffice.",
    impact: "The decision to go with a solution of high complexity need not always result in the best solutions. When dealing with more complex solutions, factors such as the skill set of the team, time constraints, feasibility of implementing the solution must be kept in mind. Sometimes, a simpler setup might result in the best possible solution.",
    debias: "The advantages and disadvantages of a complex versus simple solution must be clearly established. Long term visions must be kept in mind to accommodate future requirements or varying complexities.",
    relatedbias: ["Complexity"]
};

export const PlanningFallacy: Bias = {
    id: "Planning fallacy",
    parentId: "Decide Phase",
    definition: "Definition 1: The tendency to underestimate task-completion times. Definition 2: The planning fallacy is a phenomenon in which predictions about how much time will be needed to complete a future task display an optimism bias and underestimate the time needed.",
    oodaclass: "Decide Phase",
    oodasubclass: "Complexity",
    classreasoning: ":  Time is a crucial factor in software projects. Often, the implementation times fall short of the initial estimates. The reason being underestimation of task-completion times due to lack of understanding of the complexities involved.",
    example: "Choosing spring-security as the security framework: Spring is the most popular choice for developing Java-based enterprise applications. To meet the security requirements, spring-security would be an automatic choice. It is easy to assume that configuring the application security would be as easy as developing an application in spring. However, it is not an easy solution to implement without a proper understanding. If one assumes that the security aspect is as easy as feature development, then it leads to an optimism bias resulting in time estimate errors.",
    impact: "A common impact is that deadlines not met. The added pressure results in the implementation of sub-par solutions.",
    debias: "Add a buffer time to the initial time estimate in order to complete tasks. It is common to set the buffer time to 10% of the total estimate.",
    relatedbias: ["Complexity","Parkinson’s Law of triviality", "Time-saving bias"]
};

export const TimeSavingBias: Bias = {
    id: "Time-saving bias",
    parentId: "Decide Phase",
    definition: "The time-saving bias describes people's tendency to misestimate the time that could be saved (or lost) when increasing (or decreasing) speed.",
    oodaclass: "Decide Phase",
    oodasubclass: "Complexity",
    classreasoning: " Time misestimations often occurs due to lack of perception about the complexities involved. Decisions could be made on the presumption that increasing the factors such as the number of involved in the implementation of a project leads to saving time. ",
    example: "Assuming that adding more people to a late project results in faster implementation: In many projects, developers are promoted to a managerial position without proper training in project management. When dealing with sharp deadlines, it is not uncommon to see such managers deciding to add some extra workforce in a bid to meet the timelines. ",
    impact: "This is a classic case is based on Brooke’s Law which states that “adding human resources to a late software project makes it later”.",
    debias: "There are exceptions to the above scenario. It is applicable only with respect to projects which are already late. Adding people to a project early on would be beneficial.  Also, highly skilled contributors could be another exception as they would be able to contribute within a short time frame. ",
    relatedbias: ["Complexity","Parkinson’s Law of triviality","Planning Fallacy"]
};

export const ParkinsonsLawOfTriviality: Bias = {
    id: "Parkinson\'s law of triviality",
    parentId: "Decide Phase",
    definition: "The tendency to give disproportionate weight to trivial issues. Also known as bikeshedding.",
    oodaclass: "Decide Phase",
    oodasubclass: "Complexity",
    classreasoning: "Requirements are ranked based on their importance. The decisions which are made in relation to designing the architecture is directly dependent on which features are most important and the complexities involved in their implementation.",
    example: "During product development, sometimes an assumption is made that adding more features leads to product enhancement. The assumption for the need of every feature is not validated and results in the lack of use of many features. ",
    impact: "Valuable time spent on developing features which are not used. The features have to be kept in mind while designing the architecture of the software thereby directly or indirectly affecting the design decisions. ",
    debias: "In the above case, validate the assumption that a particular feature is needed. Often, this occurs due to vagueness in the requirements document. In such a case, clarify the requirements before assigning weights to issues. ",
    relatedbias: ["Complexity, Planning Fallacy"]
};

export const WellTravelledRoadEffect: Bias = {
    id: "Well travelled road effect",
    parentId: "Decide Phase",
    definition: "Underestimation of the duration taken to traverse oft-traveled routes and overestimation of the duration taken to traverse less familiar routes.",
    oodaclass: "Decide Phase",
    oodasubclass: "Complexity",
    classreasoning: "After having ranked alternatives, the next step is to choose one for implementation. The tendency is to choose an option with which one is familiar with since the complexity involved is relatively lesser. An unfamiliar option is always associated with higher complexities leading to steep learning curve and exaggerated timelines.",
    example: ": Selection of a chatbot framework: 2017 has been the so-called year of chatbots. Natural language processing tools have made plenty of progress with options such as DialogFlow, Watson, Lex and so on available in the market. All the above-mentioned technologies are quite similar in nature with subtle differences in terms of certain extra features or under the hood implementation differences.",
    impact: ": Let us assume that the person in charge of making the selection for a new project is familiar with DialogFlow having worked with it previously. Due to familiarity with DialogFlow, the person would be inclined to choosing it again. This has an impact on the time estimates for implementation as it would be generally be lesser when using DialogFlow due to the feeling of it being a well-travelled road as opposed to when the decision is to go with Watson.",
    debias: "In case of a familiar technology, then assign a buffer time of 10%. In case of unfamiliar technologies, try to get an estimate from people well versed in working with those technologies and limit the buffer period to 10%.",
    relatedbias: ["Complexity", "Time-saving bias"]
};

export const BandwagonEffectDecide: Bias = {
    id: "Bandwagon Effect",
    parentId: "Decide Phase",
    definition: "The tendency to do (or believe) things because many other people do (or believe) the same. Related to groupthink and herd behavior.",
    oodaclass: "Decide Phase",
    oodasubclass: "Nature of invention / trends",
    classreasoning: "There is always a temptation to use trending technologies. When having to decide from a set of alternatives, the market trends often dictate the decision-making.  ",
    example: "There are plenty of programming languages based on javascript in the market. Typescript has been increasing in popularity and in the current market, the temptation would be to follow the trends. There is a tendency for people to migrate from vanilla js to typescript in case of existing projects or choose Typescript initially when implementing a new project.",
    impact: "Using latest technology does not always ensure success. In case the technology is not supported well, or it has a strong competitor, then the technology may not survive. An example of javascript based language is CoffeeScript which has been facing a decline in spite of its popularity at one point. ",
    debias: "While it is important to keep up to date with the latest trends, it is important to remember that it does not always pay off. Keep track of competition and try to foresee which technology will have a longer lifetime based on factors such as the companies which are supporting the languages, the size of the contributing community and so on and make a rational decision instead of just following the trends. ",
    relatedbias: ["Pro-innovation bias (The tendency to have an excessive optimism towards an invention or innovation's usefulness throughout society, while often failing to identify its limitations and weaknesses.)"]
};

export const IKEAEffect: Bias = {
    id: "IKEA effect",
    parentId: "Decide Phase",
    definition: "The tendency for people to place a disproportionately high value on objects that they partially assembled themselves, such as furniture from IKEA, regardless of the quality of the end result.",
    oodaclass: "Decide Phase",
    oodasubclass: "Nature of invention / trends",
    classreasoning: "A solution that is developed in-house will always be preferred within an organization over solutions developed by third party vendors. In many cases, the in-house solution will be preferred irrespective of whether or not it is feasible in the context due to the nature of its invention.",
    example: "Choosing between Spring batch and ETL product: One can argue that Java batch processing is similar to ETL in more than one way. Both technologies have their own set of advantages and disadvantages depending on a specific context.",
    impact: "In cases where companies have their own implementation using spring batch, the tendency would be to reuse the technology when a new requirement surfaces. The IKEA effect leads to creating a devotion to software that we have been developed in. Alternatives like Informatica, Datastage etc. would not be in genuine contention even in relevant use cases in the future simply because the decision-makers develop a myopic view towards other alternatives.",
    debias: "Do not decide on using a technology just because it is invented inside the company. The requirements must be kept in mind especially the ones which will are meant to be implemented in the future. Additionally, the skill set of the team has to be kept in mind as to whether they are qualified to not only implement, but perform maintenance and support work as well.",
    relatedbias: ["Not invented here (Aversion to contact with or use of products, research, standards, or knowledge developed outside a group)."]
};

export const Habit: Bias = {
    id: "Habit",
    parentId: "Decide Phase",
    definition: "An alternative may be chosen only because it was used before.",
    oodaclass: "Decide Phase",
    oodasubclass: "Previous knowledge / experience",
    classreasoning: "Habit by definition refers to an acquired behavior which is developed through knowledge gathered from different experiences.",
    example: ": Selection between AWS and Google Cloud for hosting a web application: AWS and Google Cloud are both good solutions for hosting a web application. In comparison to Google Cloud, AWS has been around for a longer period with more people are familiar with it. Given a scenario where a new web application is to be hosted, from habit a person with experience with AWS would prefer to use it again. ",
    impact: "While AWS has the advantage from having been around for a long time, Google Cloud is better suited in certain areas such as for big data applications. Making a decision simply because it was used before does not result in the better choice.",
    debias: "Making a list of advantages and disadvantages of alternatives is always helpful to compare. Inputs from people who have prior experience is always an advantage as they possess firsthand information from having used it.",
    relatedbias: ["Law of instrument", "Mere exposure effect"]
};

export const LawOfTheInstrumentDecide: Bias = {
    id: "Law of the instrument",
    parentId: "Decide Phase",
    definition: "An over-reliance on a familiar tool or methods, ignoring or under-valuing alternative approaches.",
    oodaclass: "Decide Phase",
    oodasubclass: "Previous knowledge / experience",
    classreasoning: "As the definition states, an exposure to a set of technologies for a prolonged period of time leads to an over-reliance on them. The excessive reliance is from experience gathered from using them over time.",
    example: "Selection between AWS and Google Cloud for hosting a web application: AWS and Google Cloud are both good solutions for hosting a web application. In comparison to Google Cloud, AWS has been around for a longer period with more people are familiar with it. Given a scenario where a new web application is to be hosted, from habit a person with experience with AWS would prefer to use it again.",
    impact: "While AWS has the advantage from having been around for a long time, Google Cloud is better suited in certain areas such as for big data applications. Making a decision simply because it was used before does not result in the better choice.",
    debias: "Making a list of advantages and disadvantages of alternatives is always helpful to compare. Inputs from people who have prior experience is always an advantage as they possess firsthand information from having used it.",
    relatedbias: ["Habit", "Mere exposure effect"]
};

export const MereExposureEffectDecide: Bias = {
    id: "Mere exposure effect",
    parentId: "Decide Phase",
    definition: "The tendency to express undue liking for things merely because of familiarity with them.",
    oodaclass: "Decide Phase",
    oodasubclass: "Previous knowledge / experience",
    classreasoning: " Experience with technologies results in familiarity with them. The case of mere exposure effect occurs when a person has just heard or read about certain technologies being useful without having used it rigorously. ",
    example: "Selection between AWS and Google Cloud for hosting a web application: AWS and Google Cloud are both good solutions for hosting a web application. In comparison to Google Cloud, AWS has been around for a longer period with more people are familiar with it. Given a scenario where a new web application is to be hosted. A person who has heard or read about Google Cloud would prefer to use it instead of AWS merely from exposure to such information. ",
    impact: "AWS and Google could have their own set of advantages and weaknesses. Making a decision without proper experience or feedback from experienced people and from mere exposure to information does not guarantee success.",
    debias: "Making a list of advantages and disadvantages of alternatives is always helpful to compare. Inputs from people who have prior experience is always an advantage as they possess firsthand information from having used it.",
    relatedbias: ["Habit", "Law of instrument"]
};

export const TestBias: Bias = {
    id: "Test",
    parentId: "Decide Phase",
    definition: "Some aspects and outcomes of choice cannot be tested, leading to unrealistic confidence in judgement.",
    oodaclass: "Decide Phase",
    oodasubclass: "Strategy",
    classreasoning: " There are plenty of testing frameworks and the concept of test driven development is followed by large number of teams. Establishing a sound test strategy ensures a stable code base at all times and reduces failures.",
    example: "Automated frontend testing: Achieving hundred percent code coverage is generally tricky. It is hard to test all aspect of frontend code using automated test frameworks. Realistic expectations have to be set, and it is hard to measure how much testing is realistic. Testing complex corner cases are sometimes avoided if the user interface looks right and works as expected in most cases. ",
    impact: "As the user interface would work as expected in most cases, it leads to an unrealistic confidence on the test code. It would be harder to detect failures during future deployments as the tests would pass even when there could be a potential error.",
    debias: "Identify a testing strategy and establish a testing philosophy. Use test driven development where possible. Always try to keep the tests up to date. Document cases which are hard to test as these could indicate areas of failure in the future.",
    relatedbias: [""]
};

export const HyperbolicDiscounting: Bias = {
    id: "Hyperbolic Discounting",
    parentId: "Decide Phase",
    definition: "Discounting is the tendency for people to have a stronger preference for more immediate payoffs relative to later payoffs. Hyperbolic discounting leads to choices that are inconsistent over time.",
    oodaclass: "Decide Phase",
    oodasubclass: "Strategy",
    classreasoning: "Hyperbolic discounting is based on the principle of least effort (choosing the path of least resistance). In time boxed environments, strategic decisions are generally aimed at making a decision which results in an immediate pay off. ",
    example: "CMS versus hand coding websites: CMSs such as Wordpress, Drupal etc. provide a speedy way of implementing websites. Coding websites using websites on the other hand requires considerably more time but offers benefits in terms of being more customizable.",
    impact: "A website can be developed in relatively less time using a CMS. However, development of future features will be feasible if they do not require a high degree of customization.",
    debias: "Be mindful of future requirements when making a decision. Verify thoroughly if the option which results in quick pay offs is able to handle more complex requirements in the future. ",
    relatedbias: ["Inconsistency"]
};

export const Inconsistency: Bias = {
    id: "Inconsistency",
    parentId: "Decide Phase",
    definition: "Often a consistent judgement strategy is not applied to an identical repetitive set of cases.",
    oodaclass: "Decide Phase",
    oodasubclass: "Strategy",
    classreasoning: "Inconsistency arises when different strategies which are incoherent with one another are applied across projects which share some kind of dependency. ",
    example: "Using multiple testing frameworks: Consider the scenario where two teams within an organization are setting up a test framework for frontend projects. Two popular choices would be Jasmine and Jest based on recent trends. If each team decides to go with a different choice of testing framework, then it creates an inconsistency in the technology stack being used within the organization. ",
    impact: "The direct consequence with an inconsistent strategy is difficulties in integration especially within a project which has a lot of different components. In case of the above example, it would be a common scenario if a decision is taken in the future to consolidate the technology stack and request all teams to use a single framework across all project to leverage some common components across projects. In this case, teams which are not using the selected framework would have to migrate to the chosen one increasing development overhead. ",
    debias: "Brainstorm the different alternatives and freeze on an option. Create a rule set defining which technologies have to be used for which scenarios for reference when setting up future projects.",
    relatedbias: ["Hyperbolic Discounting"]
};

export const SampleBias: Bias = {
    id: "",
    parentId: "Decide Phase",
    definition: "",
    oodaclass: "Decide Phase",
    oodasubclass: "Nature of invention / trends",
    classreasoning: "",
    example: "",
    impact: "",
    debias: "",
    relatedbias: [""]
};

export const PostPurchaseRationalization: Bias = {
    id: "Post-purchase rationalization",
    parentId: "Act Phase",
    definition: "The tendency to persuade oneself through rational argument that a purchase was good value.",
    oodaclass: "Act Phase",
    oodasubclass: "",
    classreasoning: "The effects of post-purchase rationalization is felt once a decision for a purchase has been made and has been acted upon. The purchase is justified irrespective of whether it was good or bad.",
    example: "Purchase of third-party solutions: Companies often spend large amounts of money in purchasing readymade solutions from third parties. This is especially true in cases when the required skill set is lacking within the organization. ",
    impact: "Following the purchase of such solutions, the post-purchase rationalization effect would result in the continued application of the selected technology even in cases when it could be a poor choice. The point of realization might come a bit too late until the point of a resounding failure. It would then require vast efforts in large scale migrations from the old technology to a new one. Post-purchase rationalization also makes it harder to learn from new alternatives down the line.",
    debias: "If using third party solutions, ensure that support is being provided for a long term along with regular updates. Set checkpoints to regularly verify if the existing solution caters to existing requirements as well as new ones.",
    relatedbias: ["Choice-supportive bias (The tendency to remember one's choices as better than they actually were)."]
};

export const AllBiasesInfo: Bias[] = [CompletenessBias, ConfirmationBias, InformationBias,
    LevelsOfProcessingEffectObserve, ReferenceBias, SearchBias, FramingBias, SimilarityBiasObserve,
    BaseRateFallacy, AvailabilityHeuristic, SimilarityBiasOrient, FunctionFixedness, GoogleEffect,
    LawOfTheInstrumentOrient, LevelsOfProcessingEffectOrient, MereExposureEffectOrient,
    BandwagonEffectOrient, AttenuationBias, HardEasyEffect, PlanningFallacy, Habit,
    TimeSavingBias, ParkinsonsLawOfTriviality, WellTravelledRoadEffect, BandwagonEffectDecide,
    IKEAEffect, SampleBias, LawOfTheInstrumentDecide, MereExposureEffectDecide,
    TestBias, HyperbolicDiscounting, Inconsistency, PostPurchaseRationalization];