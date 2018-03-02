
const getText = () => {
	return text;
}

const randomStart = () => {
	return Math.floor(Math.random() * searchText.length);
}

const findSnippet = (word, start = randomStart()) => {
	const index = searchText.indexOf(word.toLowerCase(), start);

	if (index > -1) {
		const section = masterText.slice(index - 18, index + 18).trim();
		const trimmed = trimExtraLetters(section);
		return highlight(trimmed, word);
	} else {
		return '';
	}
}

const trimExtraLetters = (section) => {
	const regExp = /\S/

	// trim beg
	let beg = 0;
	while (regExp.test(section[beg])) {
		beg++;
	}

	// trim end
	let end = section.length - 1;
	while (regExp.test(section[end])) {
		end--;
	}
	return section.slice(beg, end).trim();
}

function highlight(foundText, word) {
	const index = foundText.toLowerCase().indexOf(word.toLowerCase());

	if (index > -1) {
		return foundText.substring(0, index) + '<span class="highlight">' + foundText.substring(index, index + word.length) + '</span>' + foundText.substring(index + word.length);
	}

}

const searchWords = [
	"effect",
	"tendency",
	"information",
	"bias",
	"people",
	"overestimate",
	"greater",
	"memories",
	"other",
	"illusion",
	"being",
	"time",
	"attribution",
]

const masterText =
	`
Ambiguity effect The tendency to avoid options for which missing information makes the probability seem "unknown". [11] Anchoring or focalism The tendency to rely too heavily, or "anchor", on one trait or piece of information when making decisions (usually the first piece of information acquired on that subject)[12][13] Anthropocentric thinking The tendency to use human analogies as a basis for reasoning about other, less familiar, biological phenomena.[14] Anthropomorphism or personification The tendency to characterize animals, objects, and abstract concepts as possessing human-like traits, emotions, and intentions.[15] Attentional bias The tendency of our perception to be affected by our recurring thoughts.[16] Automation bias The tendency to depend excessively on automated systems which can lead to erroneous automated information overriding correct decisions.[17] Availability heuristic The tendency to overestimate the likelihood of events with greater "availability" in memory, which can be influenced by how recent the memories are or how unusual or emotionally charged they may be.[18] Availability cascade A self-reinforcing process in which a collective belief gains more and more plausibility through its increasing repetition in public discourse (or "repeat something long enough and it will become true").[19] Backfire effect The reaction to disconfirming evidence by strengthening one's previous beliefs.[20] cf. Continued influence effect. Bandwagon effect The tendency to do (or believe) things because many other people do (or believe) the same. Related to groupthink and herd behavior.[21] Base rate fallacy or Base rate neglect The tendency to ignore base rate information (generic, general information) and focus on specific information (information only pertaining to a certain case).[22] Belief bias An effect where someone's evaluation of the logical strength of an argument is biased by the believability of the conclusion.[23] Ben Franklin effect A person who has performed a favor for someone is more likely to do another favor for that person than they would be if they had received a favor from that person. Berkson's paradox The tendency to misinterpret statistical experiments involving conditional probabilities. Bias blind spot The tendency to see oneself as less biased than other people, or to be able to identify more cognitive biases in others than in oneself.[24] Cheerleader effect The tendency for people to appear more attractive in a group than in isolation.[25] Choice-supportive bias The tendency to remember one's choices as better than they actually were.[26] Clustering illusion The tendency to overestimate the importance of small runs, streaks, or clusters in large samples of random data (that is, seeing phantom patterns).[13] Confirmation bias The tendency to search for, interpret, focus on and remember information in a way that confirms one's preconceptions.[27] Congruence bias The tendency to test hypotheses exclusively through direct testing, instead of testing possible alternative hypotheses.[13] Conjunction fallacy The tendency to assume that specific conditions are more probable than general ones.[28] Conservatism (belief revision) The tendency to revise one's belief insufficiently when presented with new evidence.[6][29][30] Continued influence effect The tendency to believe previously learned misinformation even after it has been corrected. Misinformation can still influence inferences one generates after a correction has occurred.[31] cf. Backfire effect Contrast effect The enhancement or reduction of a certain stimulus' perception when compared with a recently observed, contrasting object.[32] Courtesy bias The tendency to give an opinion that is more socially correct than one's true opinion, so as to avoid offending anyone.[33] Curse of knowledge When better-informed people find it extremely difficult to think about problems from the perspective of lesser-informed people.[34] Declinism The belief that a society or institution is tending towards decline. Particularly, it is the predisposition to view the past favourably (rosy retrospection) and future negatively.[35] Decoy effect Preferences for either option A or B change in favor of option B when option C is presented, which is similar to option B but in no way better. Denomination effect The tendency to spend more money when it is denominated in small amounts (e.g., coins) rather than large amounts (e.g., bills).[36] Disposition effect The tendency to sell an asset that has accumulated in value and resist selling an asset that has declined in value. Distinction bias The tendency to view two options as more dissimilar when evaluating them simultaneously than when evaluating them separately.[37] Dunning–Kruger effect The tendency for unskilled individuals to overestimate their own ability and the tendency for experts to underestimate their own ability.[38] Duration neglect The neglect of the duration of an episode in determining its value Empathy gap The tendency to underestimate the influence or strength of feelings, in either oneself or others. Endowment effect The tendency for people to demand much more to give up an object than they would be willing to pay to acquire it.[39] Exaggerated expectation Based on the estimates,[clarification needed] real-world evidence turns out to be less extreme than our expectations (conditionally inverse of the conservatism bias).[unreliable source?][6][40] Experimenter's or expectation bias The tendency for experimenters to believe, certify, and publish data that agree with their expectations for the outcome of an experiment, and to disbelieve, discard, or downgrade the corresponding weightings for data that appear to conflict with those expectations.[41] Focusing effect The tendency to place too much importance on one aspect of an event.[42] Forer effect or Barnum effect The observation that individuals will give high accuracy ratings to descriptions of their personality that supposedly are tailored specifically for them, but are in fact vague and general enough to apply to a wide range of people. This effect can provide a partial explanation for the widespread acceptance of some beliefs and practices, such as astrology, fortune telling, graphology, and some types of personality tests. Framing effect Drawing different conclusions from the same information, depending on how that information is presented Frequency illusion The illusion in which a word, a name, or other thing that has recently come to one's attention suddenly seems to appear with improbable frequency shortly afterwards (not to be confused with the recency illusion or selection bias).[43] This illusion may explain some examples of the Baader-Meinhof phenomenon,[44] when someone repeatedly notices a newly learned word or phrase shortly after learning it. Functional fixedness Limits a person to using an object only in the way it is traditionally used. Gambler's fallacy The tendency to think that future probabilities are altered by past events, when in reality they are unchanged. The fallacy arises from an erroneous conceptualization of the law of large numbers. For example, "I've flipped heads with this coin five times consecutively, so the chance of tails coming out on the sixth flip is much greater than heads." Hard–easy effect Based on a specific level of task difficulty, the confidence in judgments is too conservative and not extreme enough[6][45][46][47] Hindsight bias Sometimes called the "I-knew-it-all-along" effect, the tendency to see past events as being predictable[48] at the time those events happened. Hostile attribution bias The "hostile attribution bias" is the tendency to interpret others' behaviors as having hostile intent, even when the behavior is ambiguous or benign. Hot - hand fallacy The "hot-hand fallacy"(also known as the "hot hand phenomenon" or "hot hand") is the fallacious belief that a person who has experienced success with a random event has a greater chance of further success in additional attempts. Hyperbolic discounting Discounting is the tendency for people to have a stronger preference for more immediate payoffs relative to later payoffs. Hyperbolic discounting leads to choices that are inconsistent over time – people make choices today that their future selves would prefer not to have made, despite using the same reasoning.[49] Also known as current moment bias, present - bias, and related to Dynamic inconsistency. Identifiable victim effect The tendency to respond more strongly to a single identified person at risk than to a large group of people at risk.[50] IKEA effect The tendency for people to place a disproportionately high value on objects that they partially assembled themselves, such as furniture from IKEA, regardless of the quality of the end result. Illusion of control The tendency to overestimate one's degree of influence over other external events.[51] Illusion of validity Belief that our judgments are accurate, especially when available information is consistent or inter-correlated.[52] Illusory correlation Inaccurately perceiving a relationship between two unrelated events.[53][54] Illusory truth effect A tendency to believe that a statement is true if it is easier to process, or if it has been stated multiple times, regardless of its actual veracity. These are specific cases of truthiness. Impact bias The tendency to overestimate the length or the intensity of the impact of future feeling states.[55] Information bias The tendency to seek information even when it cannot affect action.[56] Insensitivity to sample size The tendency to under-expect variation in small samples. Irrational escalation The phenomenon where people justify increased investment in a decision, based on the cumulative prior investment, despite new evidence suggesting that the decision was probably wrong. Also known as the sunk cost fallacy. 
Law of the instrument An over-reliance on a familiar tool or methods, ignoring or under-valuing alternative approaches. "If all you have is a hammer, everything looks like a nail." Less-is-better effect The tendency to prefer a smaller set to a larger set judged separately, but not jointly. Look-elsewhere effect An apparently statistically significant observation may have actually arisen by chance because of the size of the parameter space to be searched. Loss aversion The disutility of giving up an object is greater than the utility associated with acquiring it.[57] (see also Sunk cost effects and endowment effect). Mere exposure effect The tendency to express undue liking for things merely because of familiarity with them.[58] Money illusion The tendency to concentrate on the nominal value (face value) of money rather than its value in terms of purchasing power.[59] Moral credential effect The tendency of a track record of non-prejudice to increase subsequent prejudice. Negativity bias or Negativity effect Psychological phenomenon by which humans have a greater recall of unpleasant memories compared with positive memories.[60][61] (see also actor-observer bias, group attribution error, positivity effect, and negativity effect).[62] Neglect of probability The tendency to completely disregard probability when making a decision under uncertainty.[63] Normalcy bias The refusal to plan for, or react to, a disaster which has never happened before. Not invented here Aversion to contact with or use of products, research, standards, or knowledge developed outside a group. Related to IKEA effect. Observer-expectancy effect When a researcher expects a given result and therefore unconsciously manipulates an experiment or misinterprets data in order to find it (see also subject-expectancy effect). Omission bias The tendency to judge harmful actions as worse, or less moral, than equally harmful omissions (inactions).[64] Optimism bias The tendency to be over-optimistic, overestimating favorable and pleasing outcomes (see also wishful thinking, valence effect, positive outcome bias).[65][66] Ostrich effect Ignoring an obvious (negative) situation. Outcome bias The tendency to judge a decision by its eventual outcome instead of based on the quality of the decision at the time it was made. Overconfidence effect Excessive confidence in one's own answers to questions. For example, for certain types of questions, answers that people rate as "99% certain" turn out to be wrong 40 % of the time.[6][67][68][69] Pareidolia A vague and random stimulus(often an image or sound) is perceived as significant, e.g., seeing images of animals or faces in clouds, the man in the moon, and hearing non - existent hidden messages on records played in reverse. Pessimism bias The tendency for some people, especially those suffering from depression, to overestimate the likelihood of negative things happening to them. Planning fallacy The tendency to underestimate task - completion times.[55] Post - purchase rationalization The tendency to persuade oneself through rational argument that a purchase was good value. Pro - innovation bias The tendency to have an excessive optimism towards an invention or innovation's usefulness throughout society, while often failing to identify its limitations and weaknesses. Projection bias The tendency to overestimate how much our future selves share one's current preferences, thoughts and values, thus leading to sub - optimal choices.[70][71][61] Pseudocertainty effect The tendency to make risk - averse choices if the expected outcome is positive, but make risk - seeking choices to avoid negative outcomes.[72] Reactance The urge to do the opposite of what someone wants you to do out of a need to resist a perceived attempt to constrain your freedom of choice(see also Reverse psychology). Reactive devaluation Devaluing proposals only because they purportedly originated with an adversary. Recency illusion The illusion that a word or language usage is a recent innovation when it is in fact long - established(see also frequency illusion). Regressive bias A certain state of mind wherein high values and high likelihoods are overestimated while low values and low likelihoods are underestimated.[6][73][74][unreliable source ?] Restraint bias The tendency to overestimate one's ability to show restraint in the face of temptation. Rhyme as reason effect Rhyming statements are perceived as more truthful. A famous example being used in the O.J Simpson trial with the defense's use of the phrase "If the gloves don't fit, then you must acquit." Risk compensation / Peltzman effect The tendency to take greater risks when perceived safety increases. Selective perception The tendency for expectations to affect perception. Semmelweis reflex The tendency to reject new evidence that contradicts a paradigm.[30] Sexual overperception bias / sexual underperception bias The tendency to over - /underestimate sexual interest of another person in oneself. Social comparison bias The tendency, when making decisions, to favour potential candidates who don't compete with one's own particular strengths.[75] Social desirability bias The tendency to over-report socially desirable characteristics or behaviours in oneself and under-report socially undesirable characteristics or behaviours.[76] Status quo bias The tendency to like things to stay relatively the same (see also loss aversion, endowment effect, and system justification).[77][78] Stereotyping Expecting a member of a group to have certain characteristics without having actual information about that individual. Subadditivity effect The tendency to judge probability of the whole to be less than the probabilities of the parts.[79] Subjective validation Perception that something is true if a subject's belief demands it to be true. Also assigns perceived connections between coincidences. Surrogation Losing sight of the strategic construct that a measure is intended to represent, and subsequently acting as though the measure is the construct of interest. Survivorship bias Concentrating on the people or things that "survived" some process and inadvertently overlooking those that didn't because of their lack of visibility. Time-saving bias Underestimations of the time that could be saved (or lost) when increasing (or decreasing) from a relatively low speed and overestimations of the time that could be saved (or lost) when increasing (or decreasing) from a relatively high speed. Third-person effect Belief that mass communicated media messages have a greater effect on others than on themselves. Triviality / Parkinson's Law of The tendency to give disproportionate weight to trivial issues. Also known as bikeshedding, this bias explains why an organization may avoid specialized or complex subjects, such as the design of a nuclear reactor, and instead focus on something easy to grasp or rewarding to the average participant, such as the design of an adjacent bike shed.[80] Unit bias The tendency to want to finish a given unit of a task or an item. Strong effects on the consumption of food in particular.[81] Weber–Fechner law Difficulty in comparing small differences in large quantities. Well travelled road effect Underestimation of the duration taken to traverse oft-traveled routes and overestimation of the duration taken to traverse less familiar routes. "Women are wonderful" effect A tendency to associate more positive attributes with women than with men. Zero-risk bias Preference for reducing a small risk to zero over a greater reduction in a larger risk. Zero-sum bias A bias whereby a situation is incorrectly perceived to be like a zero-sum game (i.e., one person gains at the expense of another). Actor-observer bias The tendency for explanations of other individuals' behaviors to overemphasize the influence of their personality and underemphasize the influence of their situation(see also Fundamental attribution error), and for explanations of one's own behaviors to do the opposite (that is, to overemphasize the influence of our situation and underemphasize the influence of our own personality). Authority bias The tendency to attribute greater accuracy to the opinion of an authority figure (unrelated to its content) and be more influenced by that opinion.[82] Defensive attribution hypothesis Attributing more blame to a harm-doer as the outcome becomes more severe or as personal or situational similarity to the victim increases. Egocentric bias Occurs when people claim more responsibility for themselves for the results of a joint action than an outside observer would credit them with. Extrinsic incentives bias An exception to the fundamental attribution error, when people view others as having (situational) extrinsic motivations and (dispositional) intrinsic motivations for oneself False consensus effect The tendency for people to overestimate the degree to which others agree with them.[83] Forer effect (aka Barnum effect) The tendency to give high accuracy ratings to descriptions of their personality that supposedly are tailored specifically for them, but are in fact vague and general enough to apply to a wide range of people. For example, horoscopes. Fundamental attribution error The tendency for people to over-emphasize personality-based explanations for behaviors observed in others while under-emphasizing the role and power of situational influences on the same behavior[61] (see also actor-observer bias, group attribution error, positivity effect, and negativity effect).[62] Group attribution error The biased belief that the characteristics of an individual group member are reflective of the group as a whole or the tendency to assume that group decision outcomes reflect the preferences of group members, even when information is available that clearly suggests otherwise. 
Halo effect The tendency for a person's positive or negative traits to "spill over" from one personality area to another in others' perceptions of them (see also physical attractiveness stereotype). [84] Illusion of asymmetric insight People perceive their knowledge of their peers to surpass their peers' knowledge of them. [85] Illusion of external agency When people view self - generated preferences as instead being caused by insightful, effective and benevolent agents Illusion of transparency People overestimate others' ability to know them, and they also overestimate their ability to know others. Illusory superiority Overestimating one's desirable qualities, and underestimating undesirable qualities, relative to other people. (Also known as "Lake Wobegon effect", "better-than-average effect", or "superiority bias".)[86] Ingroup bias The tendency for people to give preferential treatment to others they perceive to be members of their own groups.Just - world hypothesis The tendency for people to want to believe that the world is fundamentally just, causing them to rationalize an otherwise inexplicable injustice as deserved by the victim(s).Moral luck The tendency for people to ascribe greater or lesser moral standing based on the outcome of an event.Naïve cynicism Expecting more egocentric bias in others than in oneself.Naïve realism The belief that we see reality as it really is – objectively and without bias; that the facts are plain for all to see; that rational people will agree with us; and that those who don't are either uninformed, lazy, irrational, or biased. Outgroup homogeneity bias Individuals see members of their own group as being relatively more varied than members of other groups.[87] Self-serving bias The tendency to claim more responsibility for successes than failures. It may also manifest itself as a tendency for people to evaluate ambiguous information in a way beneficial to their interests (see also group-serving bias).[88] Shared information bias Known as the tendency for group members to spend more time and energy discussing information that all members are already familiar with (i.e., shared information), and less time and energy discussing information that only some members are aware of (i.e., unshared information).[89] Sociability bias of language The disproportionally higher representation of words related to social interactions, in comparison to words related to physical or mental aspects of behavior, in most languages. This bias attributed to nature of language as a tool facilitating human interactions. When verbal descriptors of human behavior are used as a source of information, sociability bias of such descriptors emerges in factor-analytic studies as a factor related to pro-social behavior (for example, of Extraversion factor in the Big Five personality traits [61] System justification The tendency to defend and bolster the status quo. Existing social, economic, and political arrangements tend to be preferred, and alternatives disparaged, sometimes even at the expense of individual and collective self-interest. (See also status quo bias.) Trait ascription bias The tendency for people to view themselves as relatively variable in terms of personality, behavior, and mood while viewing others as much more predictable. Ultimate attribution error Similar to the fundamental attribution error, in this error a person is likely to make an internal attribution to an entire group instead of the individuals within the group. Worse-than-average effect A tendency to believe ourselves to be worse than others at tasks which are difficult.[90] Bizarreness effect Bizarre material is better remembered than common material. Choice-supportive bias In a self-justifying manner retroactively ascribing one's choices to be more informed than they were when they were made. Change bias After an investment of effort in producing change, remembering one's past performance as more difficult than it actually was[91][unreliable source?] Childhood amnesia The retention of few memories from before the age of four. Conservatism or Regressive bias Tendency to remember high values and high likelihoods/probabilities/frequencies as lower than they actually were and low ones as higher than they actually were. Based on the evidence, memories are not extreme enough[73][74] Consistency bias Incorrectly remembering one's past attitudes and behaviour as resembling present attitudes and behaviour.[92] Context effect That cognition and memory are dependent on context, such that out - of - context memories are more difficult to retrieve than in -context memories(e.g., recall time and accuracy for a work - related memory will be lower at home, and vice versa) Cross - race effect The tendency for people of one race to have difficulty identifying members of a race other than their own. Cryptomnesia A form of misattribution where a memory is mistaken for imagination, because there is no subjective experience of it being a memory.[91] Egocentric bias Recalling the past in a self - serving manner, e.g., remembering one's exam grades as being better than they were, or remembering a caught fish as bigger than it really was. Fading affect bias A bias in which the emotion associated with unpleasant memories fades more quickly than the emotion associated with positive events.[93] False memory A form of misattribution where imagination is mistaken for a memory. Generation effect (Self-generation effect) That self-generated information is remembered best. For instance, people are better able to recall memories of statements that they have generated than similar statements generated by others. Google effect The tendency to forget information that can be found readily online by using Internet search engines. Hindsight bias The inclination to see past events as being more predictable than they actually were; also called the "I-knew-it-all-along" effect. Humor effect That humorous items are more easily remembered than non-humorous ones, which might be explained by the distinctiveness of humor, the increased cognitive processing time to understand the humor, or the emotional arousal caused by the humor.[94] Illusion of truth effect That people are more likely to identify as true statements those they have previously heard (even if they cannot consciously remember having heard them), regardless of the actual validity of the statement. In other words, a person is more likely to believe a familiar statement than an unfamiliar one. Illusory correlation Inaccurately remembering a relationship between two events.[6][54] Lag effect The phenomenon whereby learning is greater when studying is spread out over time, as opposed to studying the same amount of time in a single session. See also spacing effect. Leveling and sharpening Memory distortions introduced by the loss of details in a recollection over time, often concurrent with sharpening or selective recollection of certain details that take on exaggerated significance in relation to the details or aspects of the experience lost through leveling. Both biases may be reinforced over time, and by repeated recollection or re-telling of a memory.[95] Levels-of-processing effect That different methods of encoding information into memory have different levels of effectiveness.[96] List-length effect A smaller percentage of items are remembered in a longer list, but as the length of the list increases, the absolute number of items remembered increases as well. For example, consider a list of 30 items ("L30") and a list of 100 items ("L100"). An individual may remember 15 items from L30, or 50%, whereas the individual may remember 40 items from L100, or 40%. Although the percent of L30 items remembered (50%) is greater than the percent of L100 (40%), more L100 items (40) are remembered than L30 items (15).[97][further explanation needed] Misinformation effect Memory becoming less accurate because of interference from post-event information.[98] Modality effect That memory recall is higher for the last items of a list when the list items were received via speech than when they were received through writing. Mood-congruent memory bias The improved recall of information congruent with one's current mood. Next -in -line effect That a person in a group has diminished recall for the words of others who spoke immediately before himself, if they take turns speaking.[99] Part - list cueing effect That being shown some items from a list and later retrieving one item causes it to become harder to retrieve the other items.[100] Peak - end rule That people seem to perceive not the sum of an experience but the average of how it was at its peak(e.g., pleasant or unpleasant) and how it ended. Persistence The unwanted recurrence of memories of a traumatic event.[citation needed] Picture superiority effect The notion that concepts that are learned by viewing pictures are more easily and frequently recalled than are concepts that are learned by viewing their written word form counterparts.[101][102][103][104][105][106] Positivity effect(Socioemotional selectivity theory) That older adults favor positive over negative information in their memories. Primacy effect, recency effect & serial position effect That items near the end of a sequence are the easiest to recall, followed by the items at the beginning of a sequence; items in the middle are the least likely to be remembered.[107] Processing difficulty effect That information that takes longer to read and is thought about more(processed with more difficulty) is more easily remembered.[108] Reminiscence bump The recalling of more personal events from adolescence and early adulthood than personal events from other lifetime periods[109] Rosy retrospection The remembering of the past as having been better than it really was. Self - relevance effect That memories relating to the self are better recalled than similar information relating to others. 
Source confusion Confusing episodic memories with other information, creating distorted memories.[110] Spacing effect That information is better recalled if exposure to it is repeated over a long span of time rather than a short one.Spotlight effect The tendency to overestimate the amount that other people notice your appearance or behavior. Stereotypical bias Memory distorted towards stereotypes(e.g., racial or gender), e.g., "black-sounding" names being misremembered as names of criminals. [91][unreliable source ?]Suffix effect Diminishment of the recency effect because a sound item is appended to the list that the subject is not required to recall. [111][112] Suggestibility A form of misattribution where ideas suggested by a questioner are mistaken for memory. Telescoping effect The tendency to displace recent events backward in time and remote events forward in time, so that recent events appear more remote, and remote events, more recent.Testing effect The fact that you more easily remember information you have read by rewriting it instead of rereading it.[113] Tip of the tongue phenomenon When a subject is able to recall parts of an item, or related information, but is frustratingly unable to recall the whole item.This is thought to be an instance of "blocking" where multiple similar memories are being recalled and interfere with each other.[91] Travis Syndrome Overestimating the significance of the present.[114] It is related to the enlightenment Idea of Progress and chronological snobbery with possibly an appeal to novelty logical fallacy being part of the bias.Verbatim effect That the "gist" of what someone has said is better remembered than the verbatim wording.[115] This is because memories are representations, not exact copies.von Restorff effect That an item that sticks out is more likely to be remembered than other items[116] Zeigarnik effect That uncompleted or interrupted tasks are remembered better than completed ones.General
Memory
Acquiescence
Anchoring
Attentional
Attribution
Authority
Automation
Belief
Blind spot
Choice - supportive
Confirmation
Congruence
Cultural
Distinction
Egocentric
Emotional
Extrinsic incentives
Fading affect
Correspondence
Halo effect
Hindsight
Horn effect
Hostile attribution
Impact
In - group
Mere - exposure effect
Negativity
Normalcy
Omission
Optimism
Outcome
Precision
Pro - innovation
Response
Restraint
Self - serving
Social comparison
Status quo
Time - saving
Trait ascription
von Restorff effect
Zero - risk
In animals
Estimator
Forecast
Healthy user
Information
Lead time
Length time
Non - response
Omitted - variable
Participation
Recall
Sampling
Selection
Self - selection
Social desirability
Spectrum
Survivorship
Systematic error
Systemic
Verification
Wet
Academic
Exponent
Funding
FUTON
Inductive
Infrastructure
Inherent
	in education
Media
	in Vietnam War
		in Norway
		in South Asia
			in Sweden
			in the U.S.
of the Arab–Israeli conflict
	in 2014 unrest in Ukraine
Net
Publication
Reporting
White hat
Cognitive bias mitigation
Debiasing
Heuristics in judgment and decision - making
`

const searchText = masterText.toLowerCase();


const handleStart = (wordsNode) => {


	const setPageGray = () => {
		const hue = Math.round(Math.random() * 100);

		const textColor = hue >= 50 ? 'black' : 'white';
		const spanBackground = hue >= 50 ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.2)';

		wordsNode.style.setProperty('--text-color', textColor);
		wordsNode.querySelector('.highlight').style.setProperty('--background-color', spanBackground);
		document.body.style.background = `hsl(0, 0%, ${hue}%)`;
	}

	let lastText = ''
	const findSnippetAndSetToPage = (word, start) => {
		const text = findSnippet(word, start);
		if (text === lastText) return findSnippetAndSetToPage(word)
		wordsNode.innerHTML = `<h2>${text}</h2>`;
	}

	let interval;
	let lastIndex = 0;
	const handleWordChange = (newWord) => {
		console.log(newWord);

		if (interval) clearInterval(interval);
		first = true;
		interval = setInterval(() => {
			if (first) {
				const wordsFound = findSnippetAndSetToPage(newWord);
				if (wordsFound) {
					setPageGray();
					first = false;
				}
			}
			findSnippetAndSetToPage(newWord);
		}, 250)
	}

	let lastWord = '';
	const getNewWord = () => {
		const num = Math.floor(Math.random() * searchWords.length);
		const newWord = searchWords[num];
		if (newWord === lastWord) {
			return getNewWord();
		}
		lastWord = newWord;
		return newWord;
	}

	const go = () => {
		const newWord = getNewWord()
		handleWordChange(newWord);
	}

	go();

	masterInterval = setInterval(() => {
		go()
	}, 5000)


}

const findMostFrequestWords = () => {
	const wordCount = {};
	searchText.split(' ').forEach(word => {
		if (!wordCount[word]) wordCount[word] = 1;
		else wordCount[word]++;
	})

	highWords = Object.keys(wordCount).filter(key => {
		if (wordCount[key] > 10) {
			return wordCount[key];
		}
	})
	return highWords;
}

// word with over 20 hits
// "effect"
// "the"
// "tendency"
// "to"
// "for"
// "information"
// "or"
// "on"
// "of"
// "when"
// "that"
// "as"
// "a"
// "and"
// "bias"
// "be"
// "by"
// "with"
// "in"
// "are"
// "they"
// "more"
// "it"
// "people"
// "an"
// "is"
// "than"
// "-"
