class SkillTemp {
    constructor(name, ability, description) {
        this.name = name;
        this.prof = false;
        this.expertise = false;
        this.ability = ability;
        this.description = description;
    }
}

const basicSkill = [
    {
        name: "Acrobatics",
        ability: "Dexterity",
        description: `I'm good at tumbling, flipping, and rolling.`,
    },
    {
        name: "Sleight of Hand",
        ability: "Dexterity",
        description: `I'm good at hiding things and taking things.`,
    },
    {
        name: "Stealth",
        ability: "Dexterity",
        description: `I'm good at hiding and staying quiet.`,
    },
    {
        name: "Athletics",
        ability: "Strength",
        description: `I'm good at running, jumping, and climbing.`,
    },
    {
        name: "Animal Handling",
        ability: "Wisdom",
        description: `Animals really like me.`,
    },
    {
        name: "Deception",
        ability: "Charisma",
        description: `I'm good at lying and playing tricks on people.`,
    },
    {
        name: "History",
        ability: "Intelligence",
        description: `I know about things that happened a long time ago.`,
    },
    {
        name: "Insight",
        ability: "Wisdom",
        description: `I know how people feel and when they are lying.`,
    },
    {
        name: "Intimidation",
        ability: "Charisma",
        description: `I'm good at scaring people!`,
    },
    {
        name: "Investigation",
        ability: "Intelligence",
        description: `I can find clues and secrets.`,
    },
    {
        name: "Medicine",
        ability: "Wisdom",
        description: `I can help people when they're sick.`,
    },
    {
        name: "Nature",
        ability: "Wisdom",
        description: `I know about plants and animals.`,
    },
    {
        name: "Perception",
        ability: "Wisdom",
        description: `I'm good at finding and spotting things.`,
    },
    {
        name: "Performance",
        ability: "Charisma",
        description: `I'm good at putting on a show.`,
    },
    {
        name: "Persuasion",
        ability: "Charisma",
        description: `I can get people to do what I want.`,
    },
    {
        name: "Religion",
        ability: "Intelligence",
        description: `I know about the gods and prayers.`,
    },
    {
        name: "Survival",
        ability: "Wisdom",
        description: `I can follow footprints and track animals.`,
    },
    {
        name: "Arcana",
        ability: "Intelligence",
        description: `I know about magic, spells, and weird things.`,
    },
];
const abilities = [
    {
        name: "Strength",
        score: 20,
        profSave: false,
    },
    {
        name: "Dexterity",
        score: 16,
        profSave: false,
    },
    {
        name: "Constitution",
        score: 13,
        profSave: false,
    },
    {
        name: "Intelligence",
        score: 12,
        profSave: true,
    },
    {
        name: "Wisdom",
        score: 9,
        profSave: false,
    },
    {
        name: "Charisma",
        score: 9,
        profSave: false,
    },
];

const Classes = [
    { label: "Artificer", value: "Artificer" },
    { label: "Barbarian", value: "Barbarian" },
    { label: "Bard", value: "Bard" },
    { label: "Cleric", value: "Cleric" },
    { label: "Druid", value: "Druid" },
    { label: "Fighter", value: "Fighter" },
    { label: "Monk", value: "Monk" },
    { label: "Paladin", value: "Paladin" },
    { label: "Ranger", value: "Ranger" },
    { label: "Rogue", value: "Rogue" },
    { label: "Sorcerer", value: "Sorcerer" },
    { label: "Warlock", value: "Warlock" },
    { label: "Wizard", value: "Wizard" },
];
const SkillData = basicSkill.map(
    (i) => new SkillTemp(i.name, i.ability, i.description)
);

const bioData = {
    race: `Aasimar`,
    age: `53`,
    background: `Sailor`,
    XP: `34999`,
    eyes: `Brown`,
    hair: `Blonde`,
    height: `6 feet`,
    weight: `200 lb`,
    level: `17`,
    class: `Ranger`,
};

const featsTraits = [
    {
        title: "Lucky",
        content:
            "You can reroll a 1 a few times per day. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        key: 123,
        id: 123,
    },
];

const initAttacks = [
    {
        title: "Flame-tongue Longsword",
        damage: [
            { type: "slashing", dice: "1d8", id: 123 },
            { type: "fire", dice: "2d6", id: 124 },
        ],
        ability: "Charisma",
        accuracyBonus: "0",
        damageBonus: "0",
        id: 123,
        proficient: true,
    },
];

const initSpells = [
    {
        title: "Fireball",
        save: "Dexterity",
        components: "V, S, M",
        castingTime: "1 action",
        concentration: false,
        range: "150 ft.",
        duration: "Instantaneous",
        school: "Evocation",
        level: "3",
        description: `A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.
        `,
        id: 123,
    },
];

export {
    SkillData,
    abilities,
    Classes,
    bioData,
    featsTraits,
    initAttacks,
    initSpells,
};
