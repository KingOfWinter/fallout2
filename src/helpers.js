export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}

export function getHelpText(thing){
  let text = "";
  switch(thing) {
    case "Strength":
      text = "Raw physical strength. A high Strength is good for physical characters.";
      break;
    case "Perception":
      text = "The ability to see, hear, taste and notice unusual things. A high Perception is important for a sharpshooter.";
      break;
    case "Endurance":
      text = "Stamina and physical toughness. A character with a high Endurance will survive where others may not.";
      break;
    case "Charisma":
      text = "A combination of appearance and charm. A high Charisma is important for characters that want to influence people with words.";
      break;
    case "Intelligence":
      text = "Knowledge, wisdom and the ability to think quickly. A high Intelligence is important for any character.";
      break;
    case "Agility":
      text = "Coordination and the ability to move well. A high Agility is important for any active character.";
      break;
    case "Luck":
      text = "Fate. Karma. An extremely high or low Luck will affect the character - somehow. Events and situations will be changed by how lucky (or unlucky) your character is.";
      break;
    case "Fast Metabolism":
      text = "Your metabolic rate is twice normal. This means that you are much less resistant to radiation and poison, but your body heals faster.";
      break;
    case "Bloody Mess":
      text = "By some strange twist of fate, people around you die violently. You always see the worst way a person can die.";
      break;
    case "Bruiser":
      text = "A little slower, but a little bigger. You may not hit as often, but they will feel it when you do! Your total action points are lowered, but your Strength is increased.";
      break;
    case "Jinxed":
      text = "The good thing is that everyone around you has more critical failures in combat, the bad thing is - so do you!";
      break;
    case "Small Frame":
      text = "You are not quite as big as other people, but that never slowed you down. You can't carry as much, but you are more agile.";
      break;
    case "Good Natured":
      text = "You studied less-combative skills as you were growing up. Your combat skills start at a lower level, but other skills are substantially improved.";
      break;
    case "One Hander":
      text = "One of your hands is very dominant. You excel with single-handed weapons, but two-handed weapons cause a problem.";
      break;
    case "Chem Reliant":
      text = "You are more easily addicted to chems. Your chance to be addicted by chem use is twice normal, but you recover faster from their ill effects.";
      break;
    case "Finesse":
      text = "Your attacks show a lot of finesse. You don't do as much damage, but you cause more critical hits.";
      break;
    case "Chem Resistant":
      text = "Chems only affect you half as long as normal, but your chance to be addicted is also only 50% of normal.";
      break;
    case "Kamikaze":
      text = "By not paying attention to any threats, you can act a lot faster in a turn. This lowers your Armor Class to just what you are wearing, but you sequence much faster in a combat turn.";
      break;
    case "Sex Appeal":
      text = "You've got the \"right\" stuff. Members of the opposite sex are attracted to you, but those of the same sex tend to become quite jealous.";
      break;
    case "Heavy Handed":
      text = "You swing harder, not better. Your attacks are very brutal, but lack finesse. You rarely cause a good critical hit, but you always do more melee damage.";
      break;
    case "Skilled":
      text = "Since you spend more time improving your skills than a normal person, you start with better skills levels. The tradeoff is that you do not gain as many extra abilities. You will gain a perk every four levels.";
      break;
    case "Fast Shot":
      text = "You don't have time to aim for a targeted attack, because you attack faster than normal people. It costs you one less action point for guns and thrown weapons.";
      break;
    case "Gifted":
      text = "You have more innate abilities than most, so you have not spent as much time honing your skills.";
      break;
    case "Small Guns":
      text = "The use, care and general knowledge of small firearms - pistols, SMGs and rifles.";
      break;
    case "Big Guns":
      text = "The operation and maintenance of really big guns - miniguns, rocket launchers, flamethrowers and such.";
      break;
    case "Energy Weapons":
      text = "The care and feeding of energy-based weapons. How to arm and operate weapons that use laser or plasma technology.";
      break;
    case "Unarmed":
      text = "A combination of martial arts, boxing and other hand-to-hand martial arts. Combat with your hands and feet.";
      break;
    case "Melee Weapons":
      text = "Using non-ranged weapons in hand-to-hand or melee combat - knives, sledgehammers, spears, clubs and so on.";
      break;
    case "Throwing":
      text = "The skill of muscle-propelled ranged weapons, such as throwing knives, spears and grenades.";
      break;
    case "First Aid":
      text = "General healing skill. Used to heal small cuts, abrasions and other minor ills. In game terms, the use of first aid can heal more hit points over time than just rest.";
      break;
    case "Doctor":
      text = "The healing of major wounds and crippled limbs. Without this skill, it will take a much longer period of time to restore crippled limbs to use.";
      break;
    case "Sneak":
      text = "Quiet movement, and the ability to remain unnoticed. If successful, you will be much harder to locate. You cannot run and sneak at the same time.";
      break;
    case "Lockpick":
      text = "The skill of opening locks without the proper key. The use of lockpicks or electronic lockpicks will greatly enhance this skill.";
      break;
    case "Steal":
      text = "The ability to make things of others your own. Can be used to steal from people or places.";
      break;
    case "Traps":
      text = "The finding and removal of traps. Also the setting of explosives for demolition purposes.";
      break;
    case "Science":
      text = "Covers a variety of high-technology skills, such as computers, biology, physics, and geology.";
      break;
    case "Repair":
      text = "The practical application of the Science skill, for fixing of broken equipment, machinery and electronics.";
      break;
    case "Speech":
      text = "The ability to communicate in a practical and efficient manner. The skill of convincing others that your position is correct. The ability to lie and not get caught.";
      break;
    case "Barter":
      text = "Trading and trade-related tasks. The ability to get better prices for items you sell, and lower prices for items you buy.";
      break;
    case "Gambling":
      text = "The knowledge and practical skills related to wagering. The skill at cards, dice and other games.";
      break;
    case "Outdoorsman":
      text = "Practical knowledge of the outdoors, and the ability to live off the land. The knowledge of plants and animals.";
      break;
    case "Action Points":
      text = "The amount of actions your character can take during a combat turn.";
      break;
    case "Armor Class":
      text = "How good your character is at avoiding being hit in combat.";
      break;
    case "Carry Weight":
        text = "The maximum amount of equipment your character can carry, in pounds.";
        break;
    case "Critical Chance":
        text = "Chance to cause a Critical Hit.";
        break;
    case "Damage Resistance":
      text = "Any damage taken is reduced by this amount.";
      break;
    case "Healing Rate":
      text = "How many Hit Points you heal at the end of each day.";
      break;
    case "Hit Points":
        text = "How much damage your character can take before dying.";
        break;
    case "Melee Damage":
        text = "Amount of bonus damage in hand-to-hand combat. ";
        break;
    case "Party Limit":
      text = "The number of followers your character can have. ";
      break;
    case " Perk Rate":
      text = "How many levels must pass before your character gains another perk. ";
      break;
    case "Poison Resistance":
        text = "Reduces any poison damage by this amount. ";
        break;
    case "Radiation Resistance":
        text = "Amount of radiation your character is exposed to is reduced by this amount.";
        break;
    case "Sequence":
      text = "Determines how soon in a combat turn your character can react.";
      break;
    case "Skill Rate":
      text = "How many skill points your character gains per level.";
      break;
    default:
      text = "";
  } 
  return text;
}