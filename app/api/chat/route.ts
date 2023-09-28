import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  messages.push({
    content: `
    You are a bot designed to help people play the class demonology warlock or enhanement shamans. Please help them by answering questions regarding their rotation by using the following information do not use any outside information you may have about world of warcraft. Take a deep breath before answering. If possible can you tell me what order to press the buttons in. All this information should be relavent to the Dragonflight expansion for World of Warcraft only.

    Enhancment shaman talent builds
    BcQAAAAAAAAAAAAAAAAAAAAAAIJJpEJgkEikkQJhAAAAAAAAAAAAAKRIJkgiAJtkkSAQSCBC Elementalist M+
    BcQAAAAAAAAAAAAAAAAAAAAAAIJBQSSkkkASSLJJAAAAAAAAAAAAgSEkQiSKiCJtkkyBAKBJkCC Storm M+

    2 Set:Sundering increases your Mastery by (12 * 2)% for 15 sec.
    4 Set:Sundering increases your Physical and Fire damage dealt by 20% for 15 sec and your next 2 Chain Lightning casts deal 20% increased damage and refund 50% of Maelstrom Weapon stacks consumed.

    Enhancement Shaman Rotations in Dragonflight
Due to the variety of distinct builds and how differently it plays both between them and at different target counts, this page may be a bit overwhelming at first glance. I've separated each of the individual build archetypes for Elementalist and Storm into their own sections, and also segmented both single target and AoE rotations depending on what you're looking for below.
Enhancement Shaman Single Target Rotation and Priority
Due to the high number of changes that happen in the rotation when taking certain talent combinations, and some limitations with the rotation tool, they have been separated into two sections: one with Elementalist information, and one with Storm information. In the two tabs below, you can find information for each, with additional individual talent options to add onto the curated builds from the talent page, with some minor exceptions. They also have a small notes section about build specific things to be aware of. Use the tabs to switch between them:
Elementalist
Storm

This build always takes the  Lava Lash supporting talents on the right side,  Elemental Spirits and  Hailstorm to form its core. Other choices can be added for specific combinations below:
Use the ✘ markers next to selected builds and talents to populate the priority list.
 OPTIONS
 Ascendance‎	 Crash Lightning‎	 Elemental Blast
 Windfury Totem	 T30 2-piece	 T30 4-piece
PRIORITY
Cast  Feral Spirit
Cast  Flame Shock (or  Primordial Wave) if it is not active on your target
Cast  Ascendance (be primed with  Lightning Bolt)
Cast  Sundering to activate the  Earthen Might 2-piece
Cast  Windstrike
Cast  Lava Lash with  Hot Hand active
Cast  Windfury Totem if it is not active
Cast  Elemental Blast with 5+ stacks of  Maelstrom Weapon and  Elemental Spirits active or at 2 charges
Cast  Lightning Bolt with 5+ stacks of  Maelstrom Weapon and the  Primordial Wave buff active
Cast  Chain Lightning with  Crackling Thunder 4-piece charges and 5+ stacks of  Maelstrom Weapon
Cast  Lava Burst if at 5+ stacks of  Maelstrom Weapon
Cast  Elemental Blast if at 5+ stacks of  Maelstrom Weapon
Cast  Lightning Bolt if at 5+ stacks of  Maelstrom Weapon
Cast  Lightning Bolt if at 10 stacks of  Maelstrom Weapon
Cast  Primordial Wave
Cast  Lava Lash if  Ashen Catalyst has 6+ stacks
Cast  Ice Strike
Cast  Frost Shock with  Hailstorm stacks
Cast  Lava Lash
Cast  Stormstrike
Cast  Sundering
Cast  Lightning Bolt if at 5+ stacks of  Maelstrom Weapon to generate  Hailstorm
Cast  Frost Shock
Cast  Crash Lightning
Refresh  Flame Shock
Refresh  Windfury Totem
 ELEMENTALIST NOTES
Your number one priority outside of getting cooldowns cycled is to avoid any  Maelstrom Weapon waste. Second (but just as important) is to react to  Hot Hand procs, making sure to weave  Lava Lash every other global when active. Finally, filling with cycles of the  Hailstorm combo and layering your  Elemental Spirits and  Primordial Wave (plus  Sundering with the set bonus) buff windows together.
In single target, especially if taking a more hybridized loadout, expect very volatile ebbs and flows of your  Maelstrom Weapon. Starvation happens, so planning it out around your  Primal Maelstrom generation, your  Crackling Thunder refunds and  Swirling Maelstrom generation is important to get good payoff from  Elemental Blast.
Some Elementalist builds can path through  Ascendance - particularly due to the strength of  Static Accumulation's refund mechanic. During this window, you should still aim to  Windstrike frequently when possible, and re-prime  Thorim's Invocation following the 4-piece with  Lightning Bolt using spare  Maelstrom Weapon stacks.
UNDERSTANDING THE GAMEPLAY
In Season 2, the set bonus drastically raises  Sundering's priority to activate the 2-piece, making it a core part of our burst toolkit. The 4-piece however has different rules depending on build due to the Patch 10.1.5 changes:
Storm ignores it entirely due to how much it interferes with  Thorim's Invocation.
Elementalist is still hungry for  Maelstrom Weapon so still uses them in single target when  Elemental Blast isn't available.
While  Maelstrom Weapon is the most important aspect of the rotation in Dragonflight, because we can pool up to 10 stacks you don't need to rush to spend it the moment you get to 5. Instead, you should aim to weave your spender tools in between rotational cooldowns, or layer them with powerful burst windows such as  Elemental Spirits. However, this rule is broken if:
If you're about to, or already have reached 10 stacks and could waste any further generation.
You are playing any build that has  Static Accumulation, which pushes spending as soon as possible at 5+ to fish for procs.
When playing Storm, it doesn't care about  Maelstrom Weapon waste at all so long as it's in service of keeping  Stormstrike on cooldown.
Regardless of build, in Dragonflight when played properly you are significantly more likely to be "GCD locked" and have different abilities clash with each other as they come off cooldown. Because of that, it's more important to optimize the most valuable global based on the priority list rather than previous expansions where we've aimed to efficiently weave cooldowns to avoid downtime. There's an ebb and flow to our gameplay that, if mis-managed, will create deadtime in the rotation due to inefficient GCD usage. This has a knock-on effect on our  Maelstrom Weapon generation, that leads to less filled GCDs, creating a snowball effect.
Enhancement Shaman AoE Rotation and Priority
The majority of our AoE output is dictated by the talent selections we make throughout the tree, as these grant access to a variety of ways to convert our single target options into cleave, alongside significantly higher  Maelstrom Weapon generation. There are two distinct gameplay styles again much like single target, with the Elementalist and Storm variants of our tree having different damage delivery methods and preferred choices. Similar to the single target section, we have provided a section below that takes the curated builds from the talent page, and has some options to tailor the tool to your current build. Use the tabs to switch between build archetypes:

Enhancement Shaman Rotations in Dragonflight
Due to the variety of distinct builds and how differently it plays both between them and at different target counts, this page may be a bit overwhelming at first glance. I've separated each of the individual build archetypes for Elementalist and Storm into their own sections, and also segmented both single target and AoE rotations depending on what you're looking for below.
Enhancement Shaman Single Target Rotation and Priority
Due to the high number of changes that happen in the rotation when taking certain talent combinations, and some limitations with the rotation tool, they have been separated into two sections: one with Elementalist information, and one with Storm information. In the two tabs below, you can find information for each, with additional individual talent options to add onto the curated builds from the talent page, with some minor exceptions. They also have a small notes section about build specific things to be aware of. Use the tabs to switch between them:
Elementalist
Storm

This build always takes the  Lava Lash supporting talents on the right side,  Elemental Spirits and  Hailstorm to form its core. Other choices can be added for specific combinations below:
Use the ✘ markers next to selected builds and talents to populate the priority list.
 OPTIONS
 Ascendance‎	 Crash Lightning‎	 Elemental Blast
 Windfury Totem	 T30 2-piece	 T30 4-piece
PRIORITY
Cast  Feral Spirit
Cast  Flame Shock (or  Primordial Wave) if it is not active on your target
Cast  Ascendance (be primed with  Lightning Bolt)
Cast  Sundering to activate the  Earthen Might 2-piece
Cast  Windstrike
Cast  Lava Lash with  Hot Hand active
Cast  Windfury Totem if it is not active
Cast  Elemental Blast with 5+ stacks of  Maelstrom Weapon and  Elemental Spirits active or at 2 charges
Cast  Lightning Bolt with 5+ stacks of  Maelstrom Weapon and the  Primordial Wave buff active
Cast  Chain Lightning with  Crackling Thunder 4-piece charges and 5+ stacks of  Maelstrom Weapon
Cast  Lava Burst if at 5+ stacks of  Maelstrom Weapon
Cast  Elemental Blast if at 5+ stacks of  Maelstrom Weapon
Cast  Lightning Bolt if at 5+ stacks of  Maelstrom Weapon
Cast  Lightning Bolt if at 10 stacks of  Maelstrom Weapon
Cast  Primordial Wave
Cast  Lava Lash if  Ashen Catalyst has 6+ stacks
Cast  Ice Strike
Cast  Frost Shock with  Hailstorm stacks
Cast  Lava Lash
Cast  Stormstrike
Cast  Sundering
Cast  Lightning Bolt if at 5+ stacks of  Maelstrom Weapon to generate  Hailstorm
Cast  Frost Shock
Cast  Crash Lightning
Refresh  Flame Shock
Refresh  Windfury Totem
 ELEMENTALIST NOTES
Your number one priority outside of getting cooldowns cycled is to avoid any  Maelstrom Weapon waste. Second (but just as important) is to react to  Hot Hand procs, making sure to weave  Lava Lash every other global when active. Finally, filling with cycles of the  Hailstorm combo and layering your  Elemental Spirits and  Primordial Wave (plus  Sundering with the set bonus) buff windows together.
In single target, especially if taking a more hybridized loadout, expect very volatile ebbs and flows of your  Maelstrom Weapon. Starvation happens, so planning it out around your  Primal Maelstrom generation, your  Crackling Thunder refunds and  Swirling Maelstrom generation is important to get good payoff from  Elemental Blast.
Some Elementalist builds can path through  Ascendance - particularly due to the strength of  Static Accumulation's refund mechanic. During this window, you should still aim to  Windstrike frequently when possible, and re-prime  Thorim's Invocation following the 4-piece with  Lightning Bolt using spare  Maelstrom Weapon stacks.
UNDERSTANDING THE GAMEPLAY
In Season 2, the set bonus drastically raises  Sundering's priority to activate the 2-piece, making it a core part of our burst toolkit. The 4-piece however has different rules depending on build due to the Patch 10.1.5 changes:
Storm ignores it entirely due to how much it interferes with  Thorim's Invocation.
Elementalist is still hungry for  Maelstrom Weapon so still uses them in single target when  Elemental Blast isn't available.
While  Maelstrom Weapon is the most important aspect of the rotation in Dragonflight, because we can pool up to 10 stacks you don't need to rush to spend it the moment you get to 5. Instead, you should aim to weave your spender tools in between rotational cooldowns, or layer them with powerful burst windows such as  Elemental Spirits. However, this rule is broken if:
If you're about to, or already have reached 10 stacks and could waste any further generation.
You are playing any build that has  Static Accumulation, which pushes spending as soon as possible at 5+ to fish for procs.
When playing Storm, it doesn't care about  Maelstrom Weapon waste at all so long as it's in service of keeping  Stormstrike on cooldown.
Regardless of build, in Dragonflight when played properly you are significantly more likely to be "GCD locked" and have different abilities clash with each other as they come off cooldown. Because of that, it's more important to optimize the most valuable global based on the priority list rather than previous expansions where we've aimed to efficiently weave cooldowns to avoid downtime. There's an ebb and flow to our gameplay that, if mis-managed, will create deadtime in the rotation due to inefficient GCD usage. This has a knock-on effect on our  Maelstrom Weapon generation, that leads to less filled GCDs, creating a snowball effect.
Enhancement Shaman AoE Rotation and Priority
The majority of our AoE output is dictated by the talent selections we make throughout the tree, as these grant access to a variety of ways to convert our single target options into cleave, alongside significantly higher  Maelstrom Weapon generation. There are two distinct gameplay styles again much like single target, with the Elementalist and Storm variants of our tree having different damage delivery methods and preferred choices. Similar to the single target section, we have provided a section below that takes the curated builds from the talent page, and has some options to tailor the tool to your current build. Use the tabs to switch between build archetypes:

    Demonology Warlock Rotations in Dragonflight
    Nether Portal Demonology Warlock Openers
    Demonology Warlock Nether Portal Opener Rotation
    Due to how rigid the opener is when using  Nether Portal it is recommended to follow this opener only if you have the following talents:  Grimoire: Felguard,  Summon Vilefiend,  Summon Demonic Tyrant with 2/2  Soulbound Tyrant and  Soulburn.
    Precast  Power Siphon - enabled through having  Inner Demons spawning Imps prepull
    Precast  Shadow Bolt
     Shadow Bolt
     Nether Portal
     Soulburn
     Grimoire: Felguard
     Summon Vilefiend
     Demonbolt
     Call Dreadstalkers
     Demonbolt
     Hand of Gul'dan
    Any Racial or Trinkets available
     Summon Demonic Tyrant with 5s remaining on Nether Portal
     Hand of Gul'dan
     Hand of Gul'dan
     Demonic Strength
    If you have/get any  Demonic Core procs use them
    Other Demonology Warlock Openers
    Demonology Warlock Non Nether Portal Opener Rotation
    Individual Talent Changes:
     Grimoire: Felguard
     Summon Vilefiend
     Demonic Strength
     Power Siphon &  Inner Demons
     Guillotine
    Precast  Power Siphon - enabled through having  Inner Demons spawning Imps prepull
    Precast  Demonbolt or  Shadow Bolt if you are playing with  Power Siphon
     Call Dreadstalkers
     Grimoire: Felguard
     Summon Vilefiend
     Shadow Bolt
     Shadow Bolt
     Hand of Gul'dan
    If you've refunded or have any extra  Soul Shards you can cast an additional  Hand of Gul'dan
     Summon Demonic Tyrant
     Demonic Strength
     Guillotine
    Demonology Warlock Single Target Priority
    Individual Talent Changes:
     Nether Portal
     Grimoire: Felguard
     Summon Vilefiend
     Demonic Strength
     Soul Strike
     Doom
     Guillotine
     Power Siphon
     Summon Demonic Tyrant
     Nether Portal on cooldown
     Demonic Strength on cooldown
     Summon Vilefiend on cooldown, if playing  Summon Demonic Tyrant, cast as often as possible before Tyrant
     Grimoire: Felguard on cooldown,, if playing  Summon Demonic Tyrant, cast as often as possible before Tyrant
     Soul Strike as much as possible, when it will generate a  Soul Shards
     Doom
     Guillotine on cooldown
     Power Siphon on cooldown as long as you don't cap  Demonic Core
     Call Dreadstalkers
     Hand of Gul'dan
     Shadow Bolt
     Demonbolt only when you have  Demonic Core procs
     Summon Demonic Tyrant with as many demons summoned possible
    Demonology Warlock Multi Target Priority
    Individual Talent Changes:
     Grimoire: Felguard
     Demonic Strength
     Bilescourge Bombers
     Guillotine
     Implosion
     Guillotine on cooldown
     Bilescourge Bombers on cooldown
     Demonic Strength on cooldown
     Grimoire: Felguard on cooldown
     Felstorm on cooldown
     Call Dreadstalkers
     Hand of Gul'dan
     Implosion is used optimally with 6 Wild Imps but usable with less if required
    Cooldown Usage for Demonology Warlocks in Dragonflight
    Demonology Warlock has a variety of talents that interact very well with each other. Generally speaking you can use these talents in combination with one another to take advantage of certain situations throughout encounters. You should typically aim to use these combinations to help support your current role in the group/raid.
     Implosion: As this deals Shadowflame damage you can gain a large advantage in damage by combining this talent alongside with  Dreadlash,  The Houndmaster's Stratagem and  Carnivorous Stalkers. Those talents enable your Dreadstalkers to spread a damage amplifier in AoE.
     Demonbolt: Similar to Implosion, this deals full Shadowflame damage so you can stack a fair amount of damage through not only  Dreadlash,  The Houndmaster's Stratagem and  Carnivorous Stalkers but also by combining  Fel Covenant with  Sacrificed Souls and  Power Siphon, further boosting its power.
     Grand Warlock's Design: Has some additional synergy with talents such as  Summon Vilefiend and  Grimoire: Felguard since they count as greater demons you can gain additional power for your  Summon Demonic Tyrant through effective one  Soul Shards summons.
     Best Stats for Demonology Warlock
      With the introduction of stacking diminishing returns on secondary stats, you will generally want to follow this for your stats subject to sims for your personal character:
      Item Level
      Intellect
      Haste
      Mastery = Crit
      Versatility
      Weapons
      2 Set:Demonbolt deals 20% additional damage. Consuming a Demonic Core reduces the cooldown of Grimoire: Felguard by 1.0 sec.
      4 Set:Grimoire: Felguard damage increased by 20%. While Grimoire: Felguard is active, all of your demons deal 20% additional damage
      What is the BiS Demonology Warlock gear?
With many different sources of gearing and loot scarcity in Dragonflight, targeting your absolute Best in Slot gear isn't entirely realistic; instead, we've created a Best in Slot list from the ideal Demonology Warlock drops found in Dragonflight from Mythic+ Dungeons and Aberrus to help you decide what to prioritize.
While raid drops are generally the most reliable way of getting high item level gear, many other items can be just as good, if not better, so you should reference the stat priorities listed on the stats page and our Raidbots guide to help determine your own BiS gear based on what is available to you.
As a rough guideline follow the stat priority of: Haste > Mastery > Critical Strike = Versatility. Don't neglect the value of Intellect, a substantial increase in ilvl is generally worth it compared to optimized stats. It is always recommended that you use Raidbots to sim your own character, since every character is different.
Aberrus, the Shadowed Crucible Best in Slot Gear for Demonology Warlock
While raid items are more deterministically obtainable than Mythic+ ones, there can be usually heavy competition for them. Make sure you are always aiming for item level upgrades as those will be usually worth it even if you're obtaining items with poor itemization. Overall, for raids, Demonology Warlocks will be looking into items with haste and mastery where possible.

Slot	Item	Source
Head	 Grimhorns of the Sinister Savant	Aberrus, the Shadowed Crucible
Neck	 Magmorax's Fourth Collar	Aberrus, the Shadowed Crucible
Shoulders	 Amice of the Sinister Savant	Aberrus, the Shadowed Crucible
Cloak	 Voice of the Silent Star	Aberrus, the Shadowed Crucible
Chest	 Cursed Robes of the Sinister Savant	Aberrus, the Shadowed Crucible
Wrist	 Clasps of the Diligent Steward	Aberrus, the Shadowed Crucible
Gloves	 Grips of the Sinister Savant	Aberrus, the Shadowed Crucible
Belt	 Discarded Creation's Restraint	Aberrus, the Shadowed Crucible
Legs	 Leggings of the Sinister Savant	Aberrus, the Shadowed Crucible
Boots	 Treads of Fractured Realities	Aberrus, the Shadowed Crucible
Ring	 Onyx Impostor's Birthright	Aberrus, the Shadowed Crucible
Ring	 Tormentor's Siphoning Signet	Aberrus, the Shadowed Crucible
Trinket	 Neltharion's Call to Dominance	Aberrus, the Shadowed Crucible
Trinket	 Igneous Flowstone	Aberrus, the Shadowed Crucible
Staff	 Erethos, the Empty Promise	Aberrus, the Shadowed Crucible
Mythic+ Best in Slot Gear for Demonology Warlock
As usual with Mythic+ items, while there may be a theoretical best in slot selection for each slot in a simulation, it’s unlikely you’ll ever be able to achieve such a perfect character in reality. Demonology Warlocks should focus on seeking items that prioritize Haste for the most part, with Critical Strike and Mastery both providing value as second choices.

The biggest note for Mythic+ gearing is that you should look to prioritize item level upgrades early, no matter what - especially with your weapon slot.

Slot	Item	Source
Head	 Grimhorns of the Sinister Savant	Aberrus, the Shadowed Crucible
Neck	 Bromach's Disentombed Locket	Uldaman
Shoulders	 Amice of the Sinister Savant	Aberrus, the Shadowed Crucible
Cloak	 Putrid Carapace	Neltharion's Lair
Chest	 Tunic of Smoldering Ire	Neltharion's Lair
Wrist	 Sunfrost Wristwraps	Neltharion's Lair
Gloves	 Grips of the Sinister Savant	Aberrus, the Shadowed Crucible
Belt	 Lost Hero's Waist Wrap	Uldaman
Legs	 Leggings of the Sinister Savant	Aberrus, the Shadowed Crucible
Boots	 Ancient Crosswrapped Sandals	Uldaman
Ring	 Loop of Vitriolic Intent	Neltharion's Lair
Ring	 Loop of Pulsing Veins	The Underrot
Trinket	 Irideus Fragment	Halls of Infusion
Trinket	 Time-Breaching Talon	Uldaman
Staff	 Infinite Dragonspire	Uldaman
Dawn of the Infinite Gear for Demonology Warlocks
With the new Mega-Dungeon in Patch 10.1.5, there is a new source of gear for Demonology Warlock. This gear will be interesting if you don't have access to high-end Mythic+ or Mythic Raid pieces, but, if you do, there aren't any pieces to go after.

Out of gear from the mega-dungeon, the more interesting pieces to seek are:
 Morchie's Distorted Spellblade
 Ancestor's Necromantic Focus
 Bronze Defender's Vesture
 Time-Thief's Gambit
Best Demonology Warlock Trinkets in Dragonflight
Demonology Warlocks are mainly looking for one powerful on-use trinket to pair with their cooldowns, and a supplementary either proc or flat stat trinket.
Grade	Trinket	Drop Location	Notes
S	 Neltharion's Call to Dominance	Aberrus, the Shadowed Crucible	This is the premier trinket of Season 2. It is a long cooldown but is extremely strong especially given our damage profile. It also has our best secondary stat baseline which helps it stay relevant despite the cooldown.
S	 Irideus Fragment	Halls of Infusion	The strongest on use trinket comes with a very favourable cooldown for us again, with a large stat increase for every other cooldown cycle.
A	 Time-Breaching Talon	Uldaman	A less favourable cooldown for this trinket brings it down a little bit compared to Irideus Fragment but it is still a strong on use option.
B	 Igneous Flowstone	Aberrus, the Shadowed Crucible	A good passive trinket, depending on when you hit Low Tide it can be a strong option to pair with our cooldowns, however since it is not controllable drops the trinket down slightly compared to the other more on demand trinkets.
B	 Time-Thief's Gambit	Dawn of the Infinite	A very strong haste on use effect is a large benefit to Demonology, however if used at an odd time (especially in a raid encounter), the 5s stun that can occur may be enough to deter you from using this full time. In M+ scenarios you should not see yourself being stunned.
B	 Vessel of Searing Shadow	Aberrus, the Shadowed Crucible	Another less controlled equip trinket; while it has a good effect overall, again the random aspect of the additional stats is not in our favour.
C	 Screaming Black Dragonscale	Aberrus, the Shadowed Crucible	The fact that in order to maximize your damage gain from the on use effect you have to travel at least 15 yards is a big detractor to this trinket outside of very nich uses in Mythic+.
C	 Ominous Chromatic Essence	Aberrus, the Shadowed Crucible	One of the worse equip trinkets you can have currently, a low stat proc that does not line up easily with cooldowns.
C	 Beacon to the Beyond	Aberrus, the Shadowed Crucible	The on use damage is quite high but there are so few scenarios that you would realistically use this trinket that it is dropped down to the last spot.
Best Items to Upgrade with Flightstones for Demonology Warlocks
With Flightstones being a limited currency, Demonology Warlocks should focus on upgrading trinkets and weapons first, typically you would want to focus on the best available for each slot, no matter if it comes from the Raid or Mythic+. After that you can focus on your lowest item level pieces.
Crafted Gear for Demonology Warlocks in Dragonflight
Dragonflight adds many new options for crafted gear, allowing players to craft even Mythic-equivalent gear! You'll generally want to supplement gear from Raids and Mythic+ with crafted pieces. Note that crafting is limited by  Spark of Shadowflame. After receiving your first  Spark of Shadowflame from the first week of Season 2, you will receive another  Spark of Shadowflame every other week while Season 2 is active. Learn more in our guide below.

Spark of Shadowflame Guide
Best Gear to Spend Spark of Shadowflame for Demonology Warlocks
Once you obtain  Spark of Shadowflame, you should aim to craft the following items at the highest item level possible. Note that you may use the recrafting system to increase its item level later if you so desire. After crafting your best pieces, you can use sparks to improve slots that you have the lowest item level pieces, aiming to increase your average item level.
Weapon upgrades
Weakest non tier slot available
Best Embellishments for Demonology Warlocks
Crafting items with Embellishments gives them special properties and effects in addition to regular stats. However, you may only wear 2 pieces of gear with Embellishments at a time. With that in mind, the best Embellishments are:

The following list assumes you have max gems (7) for your  Elemental Lariat. For Single Target:
 Shadowflame-Tempered Armor Patch x2
 Shadowflame-Tempered Armor Patch x1 +  Elemental Lariat
 Elemental Lariat +  Amice of the Blue
 Shadowflame-Tempered Armor Patch x1 +  Amice of the Blue
If you do not have max gems for your  Elemental Lariat you will generally always be better off using some combination of  Shadowflame-Tempered Armor Patch  (x1 or x2) and  Amice of the Blue.

The following list assumes you have max gems (7) for your  Elemental Lariat. For Aoe/Cleave:
 Amice of the Blue +  Elemental Lariat
 Amice of the Blue +  Shadowflame-Tempered Armor Patch x1
 Shadowflame-Tempered Armor Patch x1 +  Elemental Lariat
 Shadowflame-Tempered Armor Patch x2
If you do not have max gems for your  Elemental Lariat you will generally always be better off using some combination of  Shadowflame-Tempered Armor Patch  (x1 or x2) and  Amice of the Blue.
Primordial Stones for Demonology Warlocks in Season 2
For Demonology Warlocks, Primordial Stones and the  Onyx Annulet will typically be worth using as long as they are upgraded to equivalent item level of other available rings.

For single target the best Primordial Stones are:
 Freezing Ice Stone
 Desirous Blood Stone
 Prophetic Twilight Stone
For AoE/Cleave the best Primordial Stones are:
 Storm-Infused Stone
 Pestilent Plague Stone
 Obscure Pastel Stone
      `,
    role: "system",
  });

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4-0613",
    stream: true,
    messages,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
