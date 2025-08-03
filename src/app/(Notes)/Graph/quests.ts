type ReqType = {
    url: string,
    _type: string,
    href: string,
    name: string,
    reqs: ReqType[]
}

export type QuestType = {
    url: string,
    _type: string,
    href: string,
    name: string,
    reqs: ReqType[]
}

type QuestsType = {
    [key: string]: QuestType
}

export const quests: QuestsType = {
  "The Depths of Despair": {
    "url": "http://oldschool.runescape.wiki/w/The_Depths_of_Despair",
    "_type": "QuestNode",
    "href": "/w/The_Depths_of_Despair",
    "name": "The Depths of Despair",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Client_of_Kourend",
        "_type": "QuestNode",
        "href": "/w/Client_of_Kourend",
        "name": "Client of Kourend",
        "reqs": []
      }
    ]
  },
  "Garden of Tranquillity": {
    "url": "http://oldschool.runescape.wiki/w/Garden_of_Tranquillity",
    "_type": "QuestNode",
    "href": "/w/Garden_of_Tranquillity",
    "name": "Garden of Tranquillity",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain",
        "_type": "QuestNode",
        "href": "/w/Creature_of_Fenkenstrain",
        "name": "Creature of Fenkenstrain",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
            "_type": "QuestNode",
            "href": "/w/The_Restless_Ghost",
            "name": "The Restless Ghost",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Recipe for Disaster/Full guide": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Full_guide",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Full_guide",
    "name": "Recipe for Disaster/Full guide",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Cook%27s_Assistant",
        "_type": "QuestNode",
        "href": "/w/Cook%27s_Assistant",
        "name": "Cook's Assistant",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Fishing_Contest",
        "_type": "QuestNode",
        "href": "/w/Fishing_Contest",
        "name": "Fishing Contest",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
        "_type": "QuestNode",
        "href": "/w/Goblin_Diplomacy",
        "name": "Goblin Diplomacy",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
        "_type": "QuestNode",
        "href": "/w/Big_Chompy_Bird_Hunting",
        "name": "Big Chompy Bird Hunting",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Murder_Mystery",
        "_type": "QuestNode",
        "href": "/w/Murder_Mystery",
        "name": "Murder Mystery",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
        "_type": "QuestNode",
        "href": "/w/Nature_Spirit",
        "name": "Nature Spirit",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
            "_type": "QuestNode",
            "href": "/w/The_Restless_Ghost",
            "name": "The Restless Ghost",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Witch%27s_House",
        "_type": "QuestNode",
        "href": "/w/Witch%27s_House",
        "name": "Witch's House",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
        "_type": "QuestNode",
        "href": "/w/Gertrude%27s_Cat",
        "name": "Gertrude's Cat",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Shadow_of_the_Storm",
        "_type": "QuestNode",
        "href": "/w/Shadow_of_the_Storm",
        "name": "Shadow of the Storm",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Golem",
            "_type": "QuestNode",
            "href": "/w/The_Golem",
            "name": "The Golem",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Demon_Slayer",
        "_type": "QuestNode",
        "href": "/w/Demon_Slayer",
        "name": "Demon Slayer",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Legends%27_Quest",
        "_type": "QuestNode",
        "href": "/w/Legends%27_Quest",
        "name": "Legends' Quest",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Family_Crest",
            "_type": "QuestNode",
            "href": "/w/Family_Crest",
            "name": "Family Crest",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Heroes%27_Quest",
            "_type": "QuestNode",
            "href": "/w/Heroes%27_Quest",
            "name": "Heroes' Quest",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
                "_type": "QuestNode",
                "href": "/w/Shield_of_Arrav",
                "name": "Shield of Arrav",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Lost_City",
                "_type": "QuestNode",
                "href": "/w/Lost_City",
                "name": "Lost City",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
                "_type": "QuestNode",
                "href": "/w/Merlin%27s_Crystal",
                "name": "Merlin's Crystal",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
                "_type": "QuestNode",
                "href": "/w/Dragon_Slayer",
                "name": "Dragon Slayer",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
            "_type": "QuestNode",
            "href": "/w/Shilo_Village",
            "name": "Shilo Village",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                "_type": "QuestNode",
                "href": "/w/Jungle_Potion",
                "name": "Jungle Potion",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                    "_type": "QuestNode",
                    "href": "/w/Druidic_Ritual",
                    "name": "Druidic Ritual",
                    "reqs": []
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
            "_type": "QuestNode",
            "href": "/w/Underground_Pass",
            "name": "Underground Pass",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Biohazard",
                "_type": "QuestNode",
                "href": "/w/Biohazard",
                "name": "Biohazard",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Plague_City",
                    "_type": "QuestNode",
                    "href": "/w/Plague_City",
                    "name": "Plague City",
                    "reqs": []
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
            "_type": "QuestNode",
            "href": "/w/Waterfall_Quest",
            "name": "Waterfall Quest",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Monkey_Madness_I",
        "_type": "QuestNode",
        "href": "/w/Monkey_Madness_I",
        "name": "Monkey Madness I",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
            "_type": "QuestNode",
            "href": "/w/The_Grand_Tree",
            "name": "The Grand Tree",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Tree_Gnome_Village",
            "_type": "QuestNode",
            "href": "/w/Tree_Gnome_Village",
            "name": "Tree Gnome Village",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Desert_Treasure",
        "_type": "QuestNode",
        "href": "/w/Desert_Treasure",
        "name": "Desert Treasure",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Dig_Site",
            "_type": "QuestNode",
            "href": "/w/The_Dig_Site",
            "name": "The Dig Site",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Temple_of_Ikov",
            "_type": "QuestNode",
            "href": "/w/Temple_of_Ikov",
            "name": "Temple of Ikov",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Tourist_Trap",
            "_type": "QuestNode",
            "href": "/w/The_Tourist_Trap",
            "name": "The Tourist Trap",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
            "_type": "QuestNode",
            "href": "/w/Troll_Stronghold",
            "name": "Troll Stronghold",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
                "_type": "QuestNode",
                "href": "/w/Death_Plateau",
                "name": "Death Plateau",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
            "_type": "QuestNode",
            "href": "/w/Waterfall_Quest",
            "name": "Waterfall Quest",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Horror_from_the_Deep",
        "_type": "QuestNode",
        "href": "/w/Horror_from_the_Deep",
        "name": "Horror from the Deep",
        "reqs": []
      }
    ]
  },
  "The Giant Dwarf": {
    "url": "http://oldschool.runescape.wiki/w/The_Giant_Dwarf",
    "_type": "QuestNode",
    "href": "/w/The_Giant_Dwarf",
    "name": "The Giant Dwarf",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Knight%27s_Sword",
        "_type": "QuestNode",
        "href": "/w/The_Knight%27s_Sword",
        "name": "The Knight's Sword",
        "reqs": []
      }
    ]
  },
  "Sheep Herder": {
    "url": "http://oldschool.runescape.wiki/w/Sheep_Herder",
    "_type": "QuestNode",
    "href": "/w/Sheep_Herder",
    "name": "Sheep Herder",
    "reqs": []
  },
  "Priest in Peril": {
    "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
    "_type": "QuestNode",
    "href": "/w/Priest_in_Peril",
    "name": "Priest in Peril",
    "reqs": []
  },
  "The Dig Site": {
    "url": "http://oldschool.runescape.wiki/w/The_Dig_Site",
    "_type": "QuestNode",
    "href": "/w/The_Dig_Site",
    "name": "The Dig Site",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
        "_type": "QuestNode",
        "href": "/w/Druidic_Ritual",
        "name": "Druidic Ritual",
        "reqs": []
      }
    ]
  },
  "Hazeel Cult": {
    "url": "http://oldschool.runescape.wiki/w/Hazeel_Cult",
    "_type": "QuestNode",
    "href": "/w/Hazeel_Cult",
    "name": "Hazeel Cult",
    "reqs": []
  },
  "Nature Spirit": {
    "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
    "_type": "QuestNode",
    "href": "/w/Nature_Spirit",
    "name": "Nature Spirit",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
        "_type": "QuestNode",
        "href": "/w/The_Restless_Ghost",
        "name": "The Restless Ghost",
        "reqs": []
      }
    ]
  },
  "Shades of Mort'ton": {
    "url": "http://oldschool.runescape.wiki/w/Shades_of_Mort%27ton",
    "_type": "QuestNode",
    "href": "/w/Shades_of_Mort%27ton",
    "name": "Shades of Mort'ton",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      }
    ]
  },
  "Rune Mysteries": {
    "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
    "_type": "QuestNode",
    "href": "/w/Rune_Mysteries",
    "name": "Rune Mysteries",
    "reqs": []
  },
  "Elemental Workshop I": {
    "url": "http://oldschool.runescape.wiki/w/Elemental_Workshop_I",
    "_type": "QuestNode",
    "href": "/w/Elemental_Workshop_I",
    "name": "Elemental Workshop I",
    "reqs": []
  },
  "Druidic Ritual": {
    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
    "_type": "QuestNode",
    "href": "/w/Druidic_Ritual",
    "name": "Druidic Ritual",
    "reqs": []
  },
  "Mourning's Ends Part II": {
    "url": "http://oldschool.runescape.wiki/w/Mourning%27s_Ends_Part_II",
    "_type": "QuestNode",
    "href": "/w/Mourning%27s_Ends_Part_II",
    "name": "Mourning's Ends Part II",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Mourning%27s_Ends_Part_I",
        "_type": "QuestNode",
        "href": "/w/Mourning%27s_Ends_Part_I",
        "name": "Mourning's Ends Part I",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Roving_Elves",
            "_type": "QuestNode",
            "href": "/w/Roving_Elves",
            "name": "Roving Elves",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Regicide",
                "_type": "QuestNode",
                "href": "/w/Regicide",
                "name": "Regicide",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
                    "_type": "QuestNode",
                    "href": "/w/Underground_Pass",
                    "name": "Underground Pass",
                    "reqs": [
                      {
                        "url": "http://oldschool.runescape.wiki/w/Biohazard",
                        "_type": "QuestNode",
                        "href": "/w/Biohazard",
                        "name": "Biohazard",
                        "reqs": [
                          {
                            "url": "http://oldschool.runescape.wiki/w/Plague_City",
                            "_type": "QuestNode",
                            "href": "/w/Plague_City",
                            "name": "Plague City",
                            "reqs": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
                "_type": "QuestNode",
                "href": "/w/Waterfall_Quest",
                "name": "Waterfall Quest",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
            "_type": "QuestNode",
            "href": "/w/Big_Chompy_Bird_Hunting",
            "name": "Big Chompy Bird Hunting",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Sheep_Herder",
            "_type": "QuestNode",
            "href": "/w/Sheep_Herder",
            "name": "Sheep Herder",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Animal Magnetism": {
    "url": "http://oldschool.runescape.wiki/w/Animal_Magnetism",
    "_type": "QuestNode",
    "href": "/w/Animal_Magnetism",
    "name": "Animal Magnetism",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
        "_type": "QuestNode",
        "href": "/w/The_Restless_Ghost",
        "name": "The Restless Ghost",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Ernest_the_Chicken",
        "_type": "QuestNode",
        "href": "/w/Ernest_the_Chicken",
        "name": "Ernest the Chicken",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      }
    ]
  },
  "A Soul's Bane": {
    "url": "http://oldschool.runescape.wiki/w/A_Soul%27s_Bane",
    "_type": "QuestNode",
    "href": "/w/A_Soul%27s_Bane",
    "name": "A Soul's Bane",
    "reqs": []
  },
  "Throne of Miscellania": {
    "url": "http://oldschool.runescape.wiki/w/Throne_of_Miscellania",
    "_type": "QuestNode",
    "href": "/w/Throne_of_Miscellania",
    "name": "Throne of Miscellania",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Heroes%27_Quest",
        "_type": "QuestNode",
        "href": "/w/Heroes%27_Quest",
        "name": "Heroes' Quest",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
            "_type": "QuestNode",
            "href": "/w/Shield_of_Arrav",
            "name": "Shield of Arrav",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Lost_City",
            "_type": "QuestNode",
            "href": "/w/Lost_City",
            "name": "Lost City",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
            "_type": "QuestNode",
            "href": "/w/Merlin%27s_Crystal",
            "name": "Merlin's Crystal",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
            "_type": "QuestNode",
            "href": "/w/Dragon_Slayer",
            "name": "Dragon Slayer",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Trials",
        "_type": "QuestNode",
        "href": "/w/The_Fremennik_Trials",
        "name": "The Fremennik Trials",
        "reqs": []
      }
    ]
  },
  "Swan Song": {
    "url": "http://oldschool.runescape.wiki/w/Swan_Song",
    "_type": "QuestNode",
    "href": "/w/Swan_Song",
    "name": "Swan Song",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/One_Small_Favour",
        "_type": "QuestNode",
        "href": "/w/One_Small_Favour",
        "name": "One Small Favour",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
            "_type": "QuestNode",
            "href": "/w/Rune_Mysteries",
            "name": "Rune Mysteries",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
            "_type": "QuestNode",
            "href": "/w/Shilo_Village",
            "name": "Shilo Village",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                "_type": "QuestNode",
                "href": "/w/Jungle_Potion",
                "name": "Jungle Potion",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                    "_type": "QuestNode",
                    "href": "/w/Druidic_Ritual",
                    "name": "Druidic Ritual",
                    "reqs": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Garden_of_Tranquillity",
        "_type": "QuestNode",
        "href": "/w/Garden_of_Tranquillity",
        "name": "Garden of Tranquillity",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain",
            "_type": "QuestNode",
            "href": "/w/Creature_of_Fenkenstrain",
            "name": "Creature of Fenkenstrain",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                "_type": "QuestNode",
                "href": "/w/Priest_in_Peril",
                "name": "Priest in Peril",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
                "_type": "QuestNode",
                "href": "/w/The_Restless_Ghost",
                "name": "The Restless Ghost",
                "reqs": []
              }
            ]
          }
        ]
      }
    ]
  },
  "Shadow of the Storm": {
    "url": "http://oldschool.runescape.wiki/w/Shadow_of_the_Storm",
    "_type": "QuestNode",
    "href": "/w/Shadow_of_the_Storm",
    "name": "Shadow of the Storm",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Golem",
        "_type": "QuestNode",
        "href": "/w/The_Golem",
        "name": "The Golem",
        "reqs": []
      }
    ]
  },
  "Underground Pass": {
    "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
    "_type": "QuestNode",
    "href": "/w/Underground_Pass",
    "name": "Underground Pass",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Biohazard",
        "_type": "QuestNode",
        "href": "/w/Biohazard",
        "name": "Biohazard",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Plague_City",
            "_type": "QuestNode",
            "href": "/w/Plague_City",
            "name": "Plague City",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Biohazard": {
    "url": "http://oldschool.runescape.wiki/w/Biohazard",
    "_type": "QuestNode",
    "href": "/w/Biohazard",
    "name": "Biohazard",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Plague_City",
        "_type": "QuestNode",
        "href": "/w/Plague_City",
        "name": "Plague City",
        "reqs": []
      }
    ]
  },
  "Fairytale I - Growing Pains": {
    "url": "http://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains",
    "_type": "QuestNode",
    "href": "/w/Fairytale_I_-_Growing_Pains",
    "name": "Fairytale I - Growing Pains",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Lost_City",
        "_type": "QuestNode",
        "href": "/w/Lost_City",
        "name": "Lost City",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
        "_type": "QuestNode",
        "href": "/w/Nature_Spirit",
        "name": "Nature Spirit",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
            "_type": "QuestNode",
            "href": "/w/The_Restless_Ghost",
            "name": "The Restless Ghost",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Desert Treasure": {
    "url": "http://oldschool.runescape.wiki/w/Desert_Treasure",
    "_type": "QuestNode",
    "href": "/w/Desert_Treasure",
    "name": "Desert Treasure",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Dig_Site",
        "_type": "QuestNode",
        "href": "/w/The_Dig_Site",
        "name": "The Dig Site",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Temple_of_Ikov",
        "_type": "QuestNode",
        "href": "/w/Temple_of_Ikov",
        "name": "Temple of Ikov",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Tourist_Trap",
        "_type": "QuestNode",
        "href": "/w/The_Tourist_Trap",
        "name": "The Tourist Trap",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
        "_type": "QuestNode",
        "href": "/w/Troll_Stronghold",
        "name": "Troll Stronghold",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
            "_type": "QuestNode",
            "href": "/w/Death_Plateau",
            "name": "Death Plateau",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
        "_type": "QuestNode",
        "href": "/w/Waterfall_Quest",
        "name": "Waterfall Quest",
        "reqs": []
      }
    ]
  },
  "What Lies Below": {
    "url": "http://oldschool.runescape.wiki/w/What_Lies_Below",
    "_type": "QuestNode",
    "href": "/w/What_Lies_Below",
    "name": "What Lies Below",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
        "_type": "QuestNode",
        "href": "/w/Rune_Mysteries",
        "name": "Rune Mysteries",
        "reqs": []
      }
    ]
  },
  "Tribal Totem": {
    "url": "http://oldschool.runescape.wiki/w/Tribal_Totem",
    "_type": "QuestNode",
    "href": "/w/Tribal_Totem",
    "name": "Tribal Totem",
    "reqs": []
  },
  "Murder Mystery": {
    "url": "http://oldschool.runescape.wiki/w/Murder_Mystery",
    "_type": "QuestNode",
    "href": "/w/Murder_Mystery",
    "name": "Murder Mystery",
    "reqs": []
  },
  "Shield of Arrav": {
    "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
    "_type": "QuestNode",
    "href": "/w/Shield_of_Arrav",
    "name": "Shield of Arrav",
    "reqs": []
  },
  "Recipe for Disaster": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster",
    "name": "Recipe for Disaster",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Mountain_Dwarf",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_the_Mountain_Dwarf",
        "name": "Recipe for Disaster/Freeing the Mountain Dwarf",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Fishing_Contest",
            "_type": "QuestNode",
            "href": "/w/Fishing_Contest",
            "name": "Fishing Contest",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Defeating_the_Culinaromancer",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Defeating_the_Culinaromancer",
        "name": "Recipe for Disaster/Defeating the Culinaromancer",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Desert_Treasure",
            "_type": "QuestNode",
            "href": "/w/Desert_Treasure",
            "name": "Desert Treasure",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/The_Dig_Site",
                "_type": "QuestNode",
                "href": "/w/The_Dig_Site",
                "name": "The Dig Site",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                    "_type": "QuestNode",
                    "href": "/w/Druidic_Ritual",
                    "name": "Druidic Ritual",
                    "reqs": []
                  }
                ]
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Temple_of_Ikov",
                "_type": "QuestNode",
                "href": "/w/Temple_of_Ikov",
                "name": "Temple of Ikov",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/The_Tourist_Trap",
                "_type": "QuestNode",
                "href": "/w/The_Tourist_Trap",
                "name": "The Tourist Trap",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
                "_type": "QuestNode",
                "href": "/w/Troll_Stronghold",
                "name": "Troll Stronghold",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
                    "_type": "QuestNode",
                    "href": "/w/Death_Plateau",
                    "name": "Death Plateau",
                    "reqs": []
                  }
                ]
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                "_type": "QuestNode",
                "href": "/w/Priest_in_Peril",
                "name": "Priest in Peril",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
                "_type": "QuestNode",
                "href": "/w/Waterfall_Quest",
                "name": "Waterfall Quest",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Horror_from_the_Deep",
            "_type": "QuestNode",
            "href": "/w/Horror_from_the_Deep",
            "name": "Horror from the Deep",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Pirate_Pete",
            "_type": "QuestNode",
            "href": "/w/Recipe_for_Disaster/Freeing_Pirate_Pete",
            "name": "Recipe for Disaster/Freeing Pirate Pete",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_King_Awowogei",
            "_type": "QuestNode",
            "href": "/w/Recipe_for_Disaster/Freeing_King_Awowogei",
            "name": "Recipe for Disaster/Freeing King Awowogei",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Monkey_Madness_I",
                "_type": "QuestNode",
                "href": "/w/Monkey_Madness_I",
                "name": "Monkey Madness I",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
                    "_type": "QuestNode",
                    "href": "/w/The_Grand_Tree",
                    "name": "The Grand Tree",
                    "reqs": []
                  },
                  {
                    "url": "http://oldschool.runescape.wiki/w/Tree_Gnome_Village",
                    "_type": "QuestNode",
                    "href": "/w/Tree_Gnome_Village",
                    "name": "Tree Gnome Village",
                    "reqs": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Skrach_Uglogwee",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_Skrach_Uglogwee",
        "name": "Recipe for Disaster/Freeing Skrach Uglogwee",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
            "_type": "QuestNode",
            "href": "/w/Big_Chompy_Bird_Hunting",
            "name": "Big Chompy Bird Hunting",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Lumbridge_Guide",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_the_Lumbridge_Guide",
        "name": "Recipe for Disaster/Freeing the Lumbridge Guide",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
            "_type": "QuestNode",
            "href": "/w/Big_Chompy_Bird_Hunting",
            "name": "Big Chompy Bird Hunting",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Biohazard",
            "_type": "QuestNode",
            "href": "/w/Biohazard",
            "name": "Biohazard",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Plague_City",
                "_type": "QuestNode",
                "href": "/w/Plague_City",
                "name": "Plague City",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Demon_Slayer",
            "_type": "QuestNode",
            "href": "/w/Demon_Slayer",
            "name": "Demon Slayer",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Murder_Mystery",
            "_type": "QuestNode",
            "href": "/w/Murder_Mystery",
            "name": "Murder Mystery",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
            "_type": "QuestNode",
            "href": "/w/Nature_Spirit",
            "name": "Nature Spirit",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                "_type": "QuestNode",
                "href": "/w/Priest_in_Peril",
                "name": "Priest in Peril",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
                "_type": "QuestNode",
                "href": "/w/The_Restless_Ghost",
                "name": "The Restless Ghost",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Witch%27s_House",
            "_type": "QuestNode",
            "href": "/w/Witch%27s_House",
            "name": "Witch's House",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Goblin_generals",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_the_Goblin_generals",
        "name": "Recipe for Disaster/Freeing the Goblin generals",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
            "_type": "QuestNode",
            "href": "/w/Goblin_Diplomacy",
            "name": "Goblin Diplomacy",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Sir_Amik_Varze",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_Sir_Amik_Varze",
        "name": "Recipe for Disaster/Freeing Sir Amik Varze",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Family_Crest",
            "_type": "QuestNode",
            "href": "/w/Family_Crest",
            "name": "Family Crest",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Heroes%27_Quest",
            "_type": "QuestNode",
            "href": "/w/Heroes%27_Quest",
            "name": "Heroes' Quest",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
                "_type": "QuestNode",
                "href": "/w/Shield_of_Arrav",
                "name": "Shield of Arrav",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Lost_City",
                "_type": "QuestNode",
                "href": "/w/Lost_City",
                "name": "Lost City",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
                "_type": "QuestNode",
                "href": "/w/Merlin%27s_Crystal",
                "name": "Merlin's Crystal",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
                "_type": "QuestNode",
                "href": "/w/Dragon_Slayer",
                "name": "Dragon Slayer",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
            "_type": "QuestNode",
            "href": "/w/Shilo_Village",
            "name": "Shilo Village",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                "_type": "QuestNode",
                "href": "/w/Jungle_Potion",
                "name": "Jungle Potion",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                    "_type": "QuestNode",
                    "href": "/w/Druidic_Ritual",
                    "name": "Druidic Ritual",
                    "reqs": []
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
            "_type": "QuestNode",
            "href": "/w/Underground_Pass",
            "name": "Underground Pass",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Biohazard",
                "_type": "QuestNode",
                "href": "/w/Biohazard",
                "name": "Biohazard",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Plague_City",
                    "_type": "QuestNode",
                    "href": "/w/Plague_City",
                    "name": "Plague City",
                    "reqs": []
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
            "_type": "QuestNode",
            "href": "/w/Waterfall_Quest",
            "name": "Waterfall Quest",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Evil_Dave",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_Evil_Dave",
        "name": "Recipe for Disaster/Freeing Evil Dave",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
            "_type": "QuestNode",
            "href": "/w/Gertrude%27s_Cat",
            "name": "Gertrude's Cat",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Shadow_of_the_Storm",
            "_type": "QuestNode",
            "href": "/w/Shadow_of_the_Storm",
            "name": "Shadow of the Storm",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/The_Golem",
                "_type": "QuestNode",
                "href": "/w/The_Golem",
                "name": "The Golem",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Demon_Slayer",
            "_type": "QuestNode",
            "href": "/w/Demon_Slayer",
            "name": "Demon Slayer",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Another_Cook%27s_Quest",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Another_Cook%27s_Quest",
        "name": "Recipe for Disaster/Another Cook's Quest",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Cook%27s_Assistant",
            "_type": "QuestNode",
            "href": "/w/Cook%27s_Assistant",
            "name": "Cook's Assistant",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Eagles' Peak": {
    "url": "http://oldschool.runescape.wiki/w/Eagles%27_Peak",
    "_type": "QuestNode",
    "href": "/w/Eagles%27_Peak",
    "name": "Eagles' Peak",
    "reqs": []
  },
  "Big Chompy Bird Hunting": {
    "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
    "_type": "QuestNode",
    "href": "/w/Big_Chompy_Bird_Hunting",
    "name": "Big Chompy Bird Hunting",
    "reqs": []
  },
  "Roving Elves": {
    "url": "http://oldschool.runescape.wiki/w/Roving_Elves",
    "_type": "QuestNode",
    "href": "/w/Roving_Elves",
    "name": "Roving Elves",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Regicide",
        "_type": "QuestNode",
        "href": "/w/Regicide",
        "name": "Regicide",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
            "_type": "QuestNode",
            "href": "/w/Underground_Pass",
            "name": "Underground Pass",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Biohazard",
                "_type": "QuestNode",
                "href": "/w/Biohazard",
                "name": "Biohazard",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Plague_City",
                    "_type": "QuestNode",
                    "href": "/w/Plague_City",
                    "name": "Plague City",
                    "reqs": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
        "_type": "QuestNode",
        "href": "/w/Waterfall_Quest",
        "name": "Waterfall Quest",
        "reqs": []
      }
    ]
  },
  "Rum Deal": {
    "url": "http://oldschool.runescape.wiki/w/Rum_Deal",
    "_type": "QuestNode",
    "href": "/w/Rum_Deal",
    "name": "Rum Deal",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters",
        "_type": "QuestNode",
        "href": "/w/Zogre_Flesh_Eaters",
        "name": "Zogre Flesh Eaters",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
            "_type": "QuestNode",
            "href": "/w/Big_Chompy_Bird_Hunting",
            "name": "Big Chompy Bird Hunting",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
            "_type": "QuestNode",
            "href": "/w/Jungle_Potion",
            "name": "Jungle Potion",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      }
    ]
  },
  "The Knight's Sword": {
    "url": "http://oldschool.runescape.wiki/w/The_Knight%27s_Sword",
    "_type": "QuestNode",
    "href": "/w/The_Knight%27s_Sword",
    "name": "The Knight's Sword",
    "reqs": []
  },
  "Creature of Fenkenstrain": {
    "url": "http://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain",
    "_type": "QuestNode",
    "href": "/w/Creature_of_Fenkenstrain",
    "name": "Creature of Fenkenstrain",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
        "_type": "QuestNode",
        "href": "/w/The_Restless_Ghost",
        "name": "The Restless Ghost",
        "reqs": []
      }
    ]
  },
  "Monk's Friend": {
    "url": "http://oldschool.runescape.wiki/w/Monk%27s_Friend",
    "_type": "QuestNode",
    "href": "/w/Monk%27s_Friend",
    "name": "Monk's Friend",
    "reqs": []
  },
  "Recipe for Disaster/Freeing Pirate Pete": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Pirate_Pete",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Freeing_Pirate_Pete",
    "name": "Recipe for Disaster/Freeing Pirate Pete",
    "reqs": []
  },
  "Regicide": {
    "url": "http://oldschool.runescape.wiki/w/Regicide",
    "_type": "QuestNode",
    "href": "/w/Regicide",
    "name": "Regicide",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
        "_type": "QuestNode",
        "href": "/w/Underground_Pass",
        "name": "Underground Pass",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Biohazard",
            "_type": "QuestNode",
            "href": "/w/Biohazard",
            "name": "Biohazard",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Plague_City",
                "_type": "QuestNode",
                "href": "/w/Plague_City",
                "name": "Plague City",
                "reqs": []
              }
            ]
          }
        ]
      }
    ]
  },
  "Grim Tales": {
    "url": "http://oldschool.runescape.wiki/w/Grim_Tales",
    "_type": "QuestNode",
    "href": "/w/Grim_Tales",
    "name": "Grim Tales",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Witch%27s_House",
        "_type": "QuestNode",
        "href": "/w/Witch%27s_House",
        "name": "Witch's House",
        "reqs": []
      }
    ]
  },
  "Rag and Bone Man": {
    "url": "http://oldschool.runescape.wiki/w/Rag_and_Bone_Man",
    "_type": "QuestNode",
    "href": "/w/Rag_and_Bone_Man",
    "name": "Rag and Bone Man",
    "reqs": []
  },
  "Enlightened Journey": {
    "url": "http://oldschool.runescape.wiki/w/Enlightened_Journey",
    "_type": "QuestNode",
    "href": "/w/Enlightened_Journey",
    "name": "Enlightened Journey",
    "reqs": []
  },
  "The Fremennik Isles": {
    "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Isles",
    "_type": "QuestNode",
    "href": "/w/The_Fremennik_Isles",
    "name": "The Fremennik Isles",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Trials",
        "_type": "QuestNode",
        "href": "/w/The_Fremennik_Trials",
        "name": "The Fremennik Trials",
        "reqs": []
      }
    ]
  },
  "Olaf's Quest": {
    "url": "http://oldschool.runescape.wiki/w/Olaf%27s_Quest",
    "_type": "QuestNode",
    "href": "/w/Olaf%27s_Quest",
    "name": "Olaf's Quest",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Trials",
        "_type": "QuestNode",
        "href": "/w/The_Fremennik_Trials",
        "name": "The Fremennik Trials",
        "reqs": []
      }
    ]
  },
  "Jungle Potion": {
    "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
    "_type": "QuestNode",
    "href": "/w/Jungle_Potion",
    "name": "Jungle Potion",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
        "_type": "QuestNode",
        "href": "/w/Druidic_Ritual",
        "name": "Druidic Ritual",
        "reqs": []
      }
    ]
  },
  "The Feud": {
    "url": "http://oldschool.runescape.wiki/w/The_Feud",
    "_type": "QuestNode",
    "href": "/w/The_Feud",
    "name": "The Feud",
    "reqs": []
  },
  "Fight Arena": {
    "url": "http://oldschool.runescape.wiki/w/Fight_Arena",
    "_type": "QuestNode",
    "href": "/w/Fight_Arena",
    "name": "Fight Arena",
    "reqs": []
  },
  "Family Crest": {
    "url": "http://oldschool.runescape.wiki/w/Family_Crest",
    "_type": "QuestNode",
    "href": "/w/Family_Crest",
    "name": "Family Crest",
    "reqs": []
  },
  "Enakhra's Lament": {
    "url": "http://oldschool.runescape.wiki/w/Enakhra%27s_Lament",
    "_type": "QuestNode",
    "href": "/w/Enakhra%27s_Lament",
    "name": "Enakhra's Lament",
    "reqs": []
  },
  "Waterfall Quest": {
    "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
    "_type": "QuestNode",
    "href": "/w/Waterfall_Quest",
    "name": "Waterfall Quest",
    "reqs": []
  },
  "Client of Kourend": {
    "url": "http://oldschool.runescape.wiki/w/Client_of_Kourend",
    "_type": "QuestNode",
    "href": "/w/Client_of_Kourend",
    "name": "Client of Kourend",
    "reqs": []
  },
  "Tears of Guthix (quest)": {
    "url": "http://oldschool.runescape.wiki/w/Tears_of_Guthix_(quest)",
    "_type": "QuestNode",
    "href": "/w/Tears_of_Guthix_(quest)",
    "name": "Tears of Guthix (quest)",
    "reqs": []
  },
  "Temple of Ikov": {
    "url": "http://oldschool.runescape.wiki/w/Temple_of_Ikov",
    "_type": "QuestNode",
    "href": "/w/Temple_of_Ikov",
    "name": "Temple of Ikov",
    "reqs": []
  },
  "Mourning's Ends Part I": {
    "url": "http://oldschool.runescape.wiki/w/Mourning%27s_Ends_Part_I",
    "_type": "QuestNode",
    "href": "/w/Mourning%27s_Ends_Part_I",
    "name": "Mourning's Ends Part I",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Roving_Elves",
        "_type": "QuestNode",
        "href": "/w/Roving_Elves",
        "name": "Roving Elves",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Regicide",
            "_type": "QuestNode",
            "href": "/w/Regicide",
            "name": "Regicide",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
                "_type": "QuestNode",
                "href": "/w/Underground_Pass",
                "name": "Underground Pass",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Biohazard",
                    "_type": "QuestNode",
                    "href": "/w/Biohazard",
                    "name": "Biohazard",
                    "reqs": [
                      {
                        "url": "http://oldschool.runescape.wiki/w/Plague_City",
                        "_type": "QuestNode",
                        "href": "/w/Plague_City",
                        "name": "Plague City",
                        "reqs": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
            "_type": "QuestNode",
            "href": "/w/Waterfall_Quest",
            "name": "Waterfall Quest",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
        "_type": "QuestNode",
        "href": "/w/Big_Chompy_Bird_Hunting",
        "name": "Big Chompy Bird Hunting",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Sheep_Herder",
        "_type": "QuestNode",
        "href": "/w/Sheep_Herder",
        "name": "Sheep Herder",
        "reqs": []
      }
    ]
  },
  "Shilo Village": {
    "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
    "_type": "QuestNode",
    "href": "/w/Shilo_Village",
    "name": "Shilo Village",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
        "_type": "QuestNode",
        "href": "/w/Jungle_Potion",
        "name": "Jungle Potion",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Doric's Quest": {
    "url": "http://oldschool.runescape.wiki/w/Doric%27s_Quest",
    "_type": "QuestNode",
    "href": "/w/Doric%27s_Quest",
    "name": "Doric's Quest",
    "reqs": []
  },
  "Recipe for Disaster/Freeing the Mountain Dwarf": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Mountain_Dwarf",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Freeing_the_Mountain_Dwarf",
    "name": "Recipe for Disaster/Freeing the Mountain Dwarf",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Fishing_Contest",
        "_type": "QuestNode",
        "href": "/w/Fishing_Contest",
        "name": "Fishing Contest",
        "reqs": []
      }
    ]
  },
  "Recipe for Disaster/Defeating the Culinaromancer": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Defeating_the_Culinaromancer",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Defeating_the_Culinaromancer",
    "name": "Recipe for Disaster/Defeating the Culinaromancer",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Desert_Treasure",
        "_type": "QuestNode",
        "href": "/w/Desert_Treasure",
        "name": "Desert Treasure",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Dig_Site",
            "_type": "QuestNode",
            "href": "/w/The_Dig_Site",
            "name": "The Dig Site",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Temple_of_Ikov",
            "_type": "QuestNode",
            "href": "/w/Temple_of_Ikov",
            "name": "Temple of Ikov",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Tourist_Trap",
            "_type": "QuestNode",
            "href": "/w/The_Tourist_Trap",
            "name": "The Tourist Trap",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
            "_type": "QuestNode",
            "href": "/w/Troll_Stronghold",
            "name": "Troll Stronghold",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
                "_type": "QuestNode",
                "href": "/w/Death_Plateau",
                "name": "Death Plateau",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
            "_type": "QuestNode",
            "href": "/w/Waterfall_Quest",
            "name": "Waterfall Quest",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Horror_from_the_Deep",
        "_type": "QuestNode",
        "href": "/w/Horror_from_the_Deep",
        "name": "Horror from the Deep",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Pirate_Pete",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_Pirate_Pete",
        "name": "Recipe for Disaster/Freeing Pirate Pete",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_King_Awowogei",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_King_Awowogei",
        "name": "Recipe for Disaster/Freeing King Awowogei",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Monkey_Madness_I",
            "_type": "QuestNode",
            "href": "/w/Monkey_Madness_I",
            "name": "Monkey Madness I",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
                "_type": "QuestNode",
                "href": "/w/The_Grand_Tree",
                "name": "The Grand Tree",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Tree_Gnome_Village",
                "_type": "QuestNode",
                "href": "/w/Tree_Gnome_Village",
                "name": "Tree Gnome Village",
                "reqs": []
              }
            ]
          }
        ]
      }
    ]
  },
  "Romeo & Juliet": {
    "url": "http://oldschool.runescape.wiki/w/Romeo_%26_Juliet",
    "_type": "QuestNode",
    "href": "/w/Romeo_%26_Juliet",
    "name": "Romeo & Juliet",
    "reqs": []
  },
  "One Small Favour": {
    "url": "http://oldschool.runescape.wiki/w/One_Small_Favour",
    "_type": "QuestNode",
    "href": "/w/One_Small_Favour",
    "name": "One Small Favour",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
        "_type": "QuestNode",
        "href": "/w/Rune_Mysteries",
        "name": "Rune Mysteries",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
        "_type": "QuestNode",
        "href": "/w/Shilo_Village",
        "name": "Shilo Village",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
            "_type": "QuestNode",
            "href": "/w/Jungle_Potion",
            "name": "Jungle Potion",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          }
        ]
      }
    ]
  },
  "Recipe for Disaster/Freeing Skrach Uglogwee": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Skrach_Uglogwee",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Freeing_Skrach_Uglogwee",
    "name": "Recipe for Disaster/Freeing Skrach Uglogwee",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
        "_type": "QuestNode",
        "href": "/w/Big_Chompy_Bird_Hunting",
        "name": "Big Chompy Bird Hunting",
        "reqs": []
      }
    ]
  },
  "Plague City": {
    "url": "http://oldschool.runescape.wiki/w/Plague_City",
    "_type": "QuestNode",
    "href": "/w/Plague_City",
    "name": "Plague City",
    "reqs": []
  },
  "Wanted!": {
    "url": "http://oldschool.runescape.wiki/w/Wanted!",
    "_type": "QuestNode",
    "href": "/w/Wanted!",
    "name": "Wanted!",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Recruitment_Drive",
        "_type": "QuestNode",
        "href": "/w/Recruitment_Drive",
        "name": "Recruitment Drive",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Black_Knights%27_Fortress",
            "_type": "QuestNode",
            "href": "/w/Black_Knights%27_Fortress",
            "name": "Black Knights' Fortress",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Lost_Tribe",
        "_type": "QuestNode",
        "href": "/w/The_Lost_Tribe",
        "name": "The Lost Tribe",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
            "_type": "QuestNode",
            "href": "/w/Goblin_Diplomacy",
            "name": "Goblin Diplomacy",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
            "_type": "QuestNode",
            "href": "/w/Rune_Mysteries",
            "name": "Rune Mysteries",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      }
    ]
  },
  "Holy Grail": {
    "url": "http://oldschool.runescape.wiki/w/Holy_Grail",
    "_type": "QuestNode",
    "href": "/w/Holy_Grail",
    "name": "Holy Grail",
    "reqs": []
  },
  "Gertrude's Cat": {
    "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
    "_type": "QuestNode",
    "href": "/w/Gertrude%27s_Cat",
    "name": "Gertrude's Cat",
    "reqs": []
  },
  "Watchtower": {
    "url": "http://oldschool.runescape.wiki/w/Watchtower",
    "_type": "QuestNode",
    "href": "/w/Watchtower",
    "name": "Watchtower",
    "reqs": []
  },
  "Black Knights' Fortress": {
    "url": "http://oldschool.runescape.wiki/w/Black_Knights%27_Fortress",
    "_type": "QuestNode",
    "href": "/w/Black_Knights%27_Fortress",
    "name": "Black Knights' Fortress",
    "reqs": []
  },
  "Between a Rock...": {
    "url": "http://oldschool.runescape.wiki/w/Between_a_Rock...",
    "_type": "QuestNode",
    "href": "/w/Between_a_Rock...",
    "name": "Between a Rock...",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Dwarf_Cannon",
        "_type": "QuestNode",
        "href": "/w/Dwarf_Cannon",
        "name": "Dwarf Cannon",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Fishing_Contest",
        "_type": "QuestNode",
        "href": "/w/Fishing_Contest",
        "name": "Fishing Contest",
        "reqs": []
      }
    ]
  },
  "The Slug Menace": {
    "url": "http://oldschool.runescape.wiki/w/The_Slug_Menace",
    "_type": "QuestNode",
    "href": "/w/The_Slug_Menace",
    "name": "The Slug Menace",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Wanted!",
        "_type": "QuestNode",
        "href": "/w/Wanted!",
        "name": "Wanted!",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Recruitment_Drive",
            "_type": "QuestNode",
            "href": "/w/Recruitment_Drive",
            "name": "Recruitment Drive",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Black_Knights%27_Fortress",
                "_type": "QuestNode",
                "href": "/w/Black_Knights%27_Fortress",
                "name": "Black Knights' Fortress",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Lost_Tribe",
            "_type": "QuestNode",
            "href": "/w/The_Lost_Tribe",
            "name": "The Lost Tribe",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
                "_type": "QuestNode",
                "href": "/w/Goblin_Diplomacy",
                "name": "Goblin Diplomacy",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
                "_type": "QuestNode",
                "href": "/w/Rune_Mysteries",
                "name": "Rune Mysteries",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Royal Trouble": {
    "url": "http://oldschool.runescape.wiki/w/Royal_Trouble",
    "_type": "QuestNode",
    "href": "/w/Royal_Trouble",
    "name": "Royal Trouble",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Throne_of_Miscellania",
        "_type": "QuestNode",
        "href": "/w/Throne_of_Miscellania",
        "name": "Throne of Miscellania",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Heroes%27_Quest",
            "_type": "QuestNode",
            "href": "/w/Heroes%27_Quest",
            "name": "Heroes' Quest",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
                "_type": "QuestNode",
                "href": "/w/Shield_of_Arrav",
                "name": "Shield of Arrav",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Lost_City",
                "_type": "QuestNode",
                "href": "/w/Lost_City",
                "name": "Lost City",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
                "_type": "QuestNode",
                "href": "/w/Merlin%27s_Crystal",
                "name": "Merlin's Crystal",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
                "_type": "QuestNode",
                "href": "/w/Dragon_Slayer",
                "name": "Dragon Slayer",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Trials",
            "_type": "QuestNode",
            "href": "/w/The_Fremennik_Trials",
            "name": "The Fremennik Trials",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Recipe for Disaster/Freeing the Lumbridge Guide": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Lumbridge_Guide",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Freeing_the_Lumbridge_Guide",
    "name": "Recipe for Disaster/Freeing the Lumbridge Guide",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
        "_type": "QuestNode",
        "href": "/w/Big_Chompy_Bird_Hunting",
        "name": "Big Chompy Bird Hunting",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Biohazard",
        "_type": "QuestNode",
        "href": "/w/Biohazard",
        "name": "Biohazard",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Plague_City",
            "_type": "QuestNode",
            "href": "/w/Plague_City",
            "name": "Plague City",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Demon_Slayer",
        "_type": "QuestNode",
        "href": "/w/Demon_Slayer",
        "name": "Demon Slayer",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Murder_Mystery",
        "_type": "QuestNode",
        "href": "/w/Murder_Mystery",
        "name": "Murder Mystery",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
        "_type": "QuestNode",
        "href": "/w/Nature_Spirit",
        "name": "Nature Spirit",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
            "_type": "QuestNode",
            "href": "/w/The_Restless_Ghost",
            "name": "The Restless Ghost",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Witch%27s_House",
        "_type": "QuestNode",
        "href": "/w/Witch%27s_House",
        "name": "Witch's House",
        "reqs": []
      }
    ]
  },
  "Legends' Quest": {
    "url": "http://oldschool.runescape.wiki/w/Legends%27_Quest",
    "_type": "QuestNode",
    "href": "/w/Legends%27_Quest",
    "name": "Legends' Quest",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Family_Crest",
        "_type": "QuestNode",
        "href": "/w/Family_Crest",
        "name": "Family Crest",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Heroes%27_Quest",
        "_type": "QuestNode",
        "href": "/w/Heroes%27_Quest",
        "name": "Heroes' Quest",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
            "_type": "QuestNode",
            "href": "/w/Shield_of_Arrav",
            "name": "Shield of Arrav",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Lost_City",
            "_type": "QuestNode",
            "href": "/w/Lost_City",
            "name": "Lost City",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
            "_type": "QuestNode",
            "href": "/w/Merlin%27s_Crystal",
            "name": "Merlin's Crystal",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
            "_type": "QuestNode",
            "href": "/w/Dragon_Slayer",
            "name": "Dragon Slayer",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
        "_type": "QuestNode",
        "href": "/w/Shilo_Village",
        "name": "Shilo Village",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
            "_type": "QuestNode",
            "href": "/w/Jungle_Potion",
            "name": "Jungle Potion",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
        "_type": "QuestNode",
        "href": "/w/Underground_Pass",
        "name": "Underground Pass",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Biohazard",
            "_type": "QuestNode",
            "href": "/w/Biohazard",
            "name": "Biohazard",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Plague_City",
                "_type": "QuestNode",
                "href": "/w/Plague_City",
                "name": "Plague City",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
        "_type": "QuestNode",
        "href": "/w/Waterfall_Quest",
        "name": "Waterfall Quest",
        "reqs": []
      }
    ]
  },
  "Clock Tower": {
    "url": "http://oldschool.runescape.wiki/w/Clock_Tower",
    "_type": "QuestNode",
    "href": "/w/Clock_Tower",
    "name": "Clock Tower",
    "reqs": []
  },
  "Prince Ali Rescue": {
    "url": "http://oldschool.runescape.wiki/w/Prince_Ali_Rescue",
    "_type": "QuestNode",
    "href": "/w/Prince_Ali_Rescue",
    "name": "Prince Ali Rescue",
    "reqs": []
  },
  "Tower of Life": {
    "url": "http://oldschool.runescape.wiki/w/Tower_of_Life",
    "_type": "QuestNode",
    "href": "/w/Tower_of_Life",
    "name": "Tower of Life",
    "reqs": []
  },
  "Icthlarin's Little Helper": {
    "url": "http://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper",
    "_type": "QuestNode",
    "href": "/w/Icthlarin%27s_Little_Helper",
    "name": "Icthlarin's Little Helper",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
        "_type": "QuestNode",
        "href": "/w/Gertrude%27s_Cat",
        "name": "Gertrude's Cat",
        "reqs": []
      }
    ]
  },
  "The Tourist Trap": {
    "url": "http://oldschool.runescape.wiki/w/The_Tourist_Trap",
    "_type": "QuestNode",
    "href": "/w/The_Tourist_Trap",
    "name": "The Tourist Trap",
    "reqs": []
  },
  "Scorpion Catcher": {
    "url": "http://oldschool.runescape.wiki/w/Scorpion_Catcher",
    "_type": "QuestNode",
    "href": "/w/Scorpion_Catcher",
    "name": "Scorpion Catcher",
    "reqs": []
  },
  "Recipe for Disaster/Freeing the Goblin generals": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_the_Goblin_generals",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Freeing_the_Goblin_generals",
    "name": "Recipe for Disaster/Freeing the Goblin generals",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
        "_type": "QuestNode",
        "href": "/w/Goblin_Diplomacy",
        "name": "Goblin Diplomacy",
        "reqs": []
      }
    ]
  },
  "Rag and Bone Man II": {
    "url": "http://oldschool.runescape.wiki/w/Rag_and_Bone_Man_II",
    "_type": "QuestNode",
    "href": "/w/Rag_and_Bone_Man_II",
    "name": "Rag and Bone Man II",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Rag_and_Bone_Man",
        "_type": "QuestNode",
        "href": "/w/Rag_and_Bone_Man",
        "name": "Rag and Bone Man",
        "reqs": []
      }
    ]
  },
  "The Corsair Curse": {
    "url": "http://oldschool.runescape.wiki/w/The_Corsair_Curse",
    "_type": "QuestNode",
    "href": "/w/The_Corsair_Curse",
    "name": "The Corsair Curse",
    "reqs": []
  },
  "Troll Romance": {
    "url": "http://oldschool.runescape.wiki/w/Troll_Romance",
    "_type": "QuestNode",
    "href": "/w/Troll_Romance",
    "name": "Troll Romance",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
        "_type": "QuestNode",
        "href": "/w/Troll_Stronghold",
        "name": "Troll Stronghold",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
            "_type": "QuestNode",
            "href": "/w/Death_Plateau",
            "name": "Death Plateau",
            "reqs": []
          }
        ]
      }
    ]
  },
  "A Taste of Hope": {
    "url": "http://oldschool.runescape.wiki/w/A_Taste_of_Hope",
    "_type": "QuestNode",
    "href": "/w/A_Taste_of_Hope",
    "name": "A Taste of Hope",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Darkness_of_Hallowvale",
        "_type": "QuestNode",
        "href": "/w/Darkness_of_Hallowvale",
        "name": "Darkness of Hallowvale",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque",
            "_type": "QuestNode",
            "href": "/w/In_Aid_of_the_Myreque",
            "name": "In Aid of the Myreque",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/In_Search_of_the_Myreque",
                "_type": "QuestNode",
                "href": "/w/In_Search_of_the_Myreque",
                "name": "In Search of the Myreque",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
                    "_type": "QuestNode",
                    "href": "/w/Nature_Spirit",
                    "name": "Nature Spirit",
                    "reqs": [
                      {
                        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                        "_type": "QuestNode",
                        "href": "/w/Priest_in_Peril",
                        "name": "Priest in Peril",
                        "reqs": []
                      },
                      {
                        "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
                        "_type": "QuestNode",
                        "href": "/w/The_Restless_Ghost",
                        "name": "The Restless Ghost",
                        "reqs": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "Merlin's Crystal": {
    "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
    "_type": "QuestNode",
    "href": "/w/Merlin%27s_Crystal",
    "name": "Merlin's Crystal",
    "reqs": []
  },
  "Ghosts Ahoy": {
    "url": "http://oldschool.runescape.wiki/w/Ghosts_Ahoy",
    "_type": "QuestNode",
    "href": "/w/Ghosts_Ahoy",
    "name": "Ghosts Ahoy",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
        "_type": "QuestNode",
        "href": "/w/The_Restless_Ghost",
        "name": "The Restless Ghost",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      }
    ]
  },
  "Demon Slayer": {
    "url": "http://oldschool.runescape.wiki/w/Demon_Slayer",
    "_type": "QuestNode",
    "href": "/w/Demon_Slayer",
    "name": "Demon Slayer",
    "reqs": []
  },
  "Devious Minds": {
    "url": "http://oldschool.runescape.wiki/w/Devious_Minds",
    "_type": "QuestNode",
    "href": "/w/Devious_Minds",
    "name": "Devious Minds",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Wanted!",
        "_type": "QuestNode",
        "href": "/w/Wanted!",
        "name": "Wanted!",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Recruitment_Drive",
            "_type": "QuestNode",
            "href": "/w/Recruitment_Drive",
            "name": "Recruitment Drive",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Black_Knights%27_Fortress",
                "_type": "QuestNode",
                "href": "/w/Black_Knights%27_Fortress",
                "name": "Black Knights' Fortress",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Lost_Tribe",
            "_type": "QuestNode",
            "href": "/w/The_Lost_Tribe",
            "name": "The Lost Tribe",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
                "_type": "QuestNode",
                "href": "/w/Goblin_Diplomacy",
                "name": "Goblin Diplomacy",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
                "_type": "QuestNode",
                "href": "/w/Rune_Mysteries",
                "name": "Rune Mysteries",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
        "_type": "QuestNode",
        "href": "/w/Troll_Stronghold",
        "name": "Troll Stronghold",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
            "_type": "QuestNode",
            "href": "/w/Death_Plateau",
            "name": "Death Plateau",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Doric%27s_Quest",
        "_type": "QuestNode",
        "href": "/w/Doric%27s_Quest",
        "name": "Doric's Quest",
        "reqs": []
      }
    ]
  },
  "Troll Stronghold": {
    "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
    "_type": "QuestNode",
    "href": "/w/Troll_Stronghold",
    "name": "Troll Stronghold",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
        "_type": "QuestNode",
        "href": "/w/Death_Plateau",
        "name": "Death Plateau",
        "reqs": []
      }
    ]
  },
  "Making Friends with My Arm": {
    "url": "http://oldschool.runescape.wiki/w/Making_Friends_with_My_Arm",
    "_type": "QuestNode",
    "href": "/w/Making_Friends_with_My_Arm",
    "name": "Making Friends with My Arm",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/My_Arm%27s_Big_Adventure",
        "_type": "QuestNode",
        "href": "/w/My_Arm%27s_Big_Adventure",
        "name": "My Arm's Big Adventure",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Eadgar%27s_Ruse",
            "_type": "QuestNode",
            "href": "/w/Eadgar%27s_Ruse",
            "name": "Eadgar's Ruse",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
                "_type": "QuestNode",
                "href": "/w/Troll_Stronghold",
                "name": "Troll Stronghold",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
                    "_type": "QuestNode",
                    "href": "/w/Death_Plateau",
                    "name": "Death Plateau",
                    "reqs": []
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Feud",
            "_type": "QuestNode",
            "href": "/w/The_Feud",
            "name": "The Feud",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
            "_type": "QuestNode",
            "href": "/w/Jungle_Potion",
            "name": "Jungle Potion",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Swan_Song",
        "_type": "QuestNode",
        "href": "/w/Swan_Song",
        "name": "Swan Song",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/One_Small_Favour",
            "_type": "QuestNode",
            "href": "/w/One_Small_Favour",
            "name": "One Small Favour",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
                "_type": "QuestNode",
                "href": "/w/Rune_Mysteries",
                "name": "Rune Mysteries",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
                "_type": "QuestNode",
                "href": "/w/Shilo_Village",
                "name": "Shilo Village",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                    "_type": "QuestNode",
                    "href": "/w/Jungle_Potion",
                    "name": "Jungle Potion",
                    "reqs": [
                      {
                        "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                        "_type": "QuestNode",
                        "href": "/w/Druidic_Ritual",
                        "name": "Druidic Ritual",
                        "reqs": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Garden_of_Tranquillity",
            "_type": "QuestNode",
            "href": "/w/Garden_of_Tranquillity",
            "name": "Garden of Tranquillity",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain",
                "_type": "QuestNode",
                "href": "/w/Creature_of_Fenkenstrain",
                "name": "Creature of Fenkenstrain",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                    "_type": "QuestNode",
                    "href": "/w/Priest_in_Peril",
                    "name": "Priest in Peril",
                    "reqs": []
                  },
                  {
                    "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
                    "_type": "QuestNode",
                    "href": "/w/The_Restless_Ghost",
                    "name": "The Restless Ghost",
                    "reqs": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Cold_War",
        "_type": "QuestNode",
        "href": "/w/Cold_War",
        "name": "Cold War",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Romeo_%26_Juliet",
        "_type": "QuestNode",
        "href": "/w/Romeo_%26_Juliet",
        "name": "Romeo & Juliet",
        "reqs": []
      }
    ]
  },
  "Recruitment Drive": {
    "url": "http://oldschool.runescape.wiki/w/Recruitment_Drive",
    "_type": "QuestNode",
    "href": "/w/Recruitment_Drive",
    "name": "Recruitment Drive",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Black_Knights%27_Fortress",
        "_type": "QuestNode",
        "href": "/w/Black_Knights%27_Fortress",
        "name": "Black Knights' Fortress",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
        "_type": "QuestNode",
        "href": "/w/Druidic_Ritual",
        "name": "Druidic Ritual",
        "reqs": []
      }
    ]
  },
  "Elemental Workshop II": {
    "url": "http://oldschool.runescape.wiki/w/Elemental_Workshop_II",
    "_type": "QuestNode",
    "href": "/w/Elemental_Workshop_II",
    "name": "Elemental Workshop II",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Elemental_Workshop_I",
        "_type": "QuestNode",
        "href": "/w/Elemental_Workshop_I",
        "name": "Elemental Workshop I",
        "reqs": []
      }
    ]
  },
  "Spirits of the Elid": {
    "url": "http://oldschool.runescape.wiki/w/Spirits_of_the_Elid",
    "_type": "QuestNode",
    "href": "/w/Spirits_of_the_Elid",
    "name": "Spirits of the Elid",
    "reqs": []
  },
  "The Golem": {
    "url": "http://oldschool.runescape.wiki/w/The_Golem",
    "_type": "QuestNode",
    "href": "/w/The_Golem",
    "name": "The Golem",
    "reqs": []
  },
  "In Search of the Myreque": {
    "url": "http://oldschool.runescape.wiki/w/In_Search_of_the_Myreque",
    "_type": "QuestNode",
    "href": "/w/In_Search_of_the_Myreque",
    "name": "In Search of the Myreque",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
        "_type": "QuestNode",
        "href": "/w/Nature_Spirit",
        "name": "Nature Spirit",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
            "_type": "QuestNode",
            "href": "/w/The_Restless_Ghost",
            "name": "The Restless Ghost",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Witch's Potion": {
    "url": "http://oldschool.runescape.wiki/w/Witch%27s_Potion",
    "_type": "QuestNode",
    "href": "/w/Witch%27s_Potion",
    "name": "Witch's Potion",
    "reqs": []
  },
  "Dragon Slayer": {
    "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
    "_type": "QuestNode",
    "href": "/w/Dragon_Slayer",
    "name": "Dragon Slayer",
    "reqs": []
  },
  "Bone Voyage": {
    "url": "http://oldschool.runescape.wiki/w/Bone_Voyage",
    "_type": "QuestNode",
    "href": "/w/Bone_Voyage",
    "name": "Bone Voyage",
    "reqs": []
  },
  "Observatory Quest": {
    "url": "http://oldschool.runescape.wiki/w/Observatory_Quest",
    "_type": "QuestNode",
    "href": "/w/Observatory_Quest",
    "name": "Observatory Quest",
    "reqs": []
  },
  "The Restless Ghost": {
    "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
    "_type": "QuestNode",
    "href": "/w/The_Restless_Ghost",
    "name": "The Restless Ghost",
    "reqs": []
  },
  "Goblin Diplomacy": {
    "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
    "_type": "QuestNode",
    "href": "/w/Goblin_Diplomacy",
    "name": "Goblin Diplomacy",
    "reqs": []
  },
  "Heroes' Quest": {
    "url": "http://oldschool.runescape.wiki/w/Heroes%27_Quest",
    "_type": "QuestNode",
    "href": "/w/Heroes%27_Quest",
    "name": "Heroes' Quest",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
        "_type": "QuestNode",
        "href": "/w/Shield_of_Arrav",
        "name": "Shield of Arrav",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Lost_City",
        "_type": "QuestNode",
        "href": "/w/Lost_City",
        "name": "Lost City",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
        "_type": "QuestNode",
        "href": "/w/Merlin%27s_Crystal",
        "name": "Merlin's Crystal",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
        "_type": "QuestNode",
        "href": "/w/Dragon_Slayer",
        "name": "Dragon Slayer",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
        "_type": "QuestNode",
        "href": "/w/Druidic_Ritual",
        "name": "Druidic Ritual",
        "reqs": []
      }
    ]
  },
  "Contact!": {
    "url": "http://oldschool.runescape.wiki/w/Contact!",
    "_type": "QuestNode",
    "href": "/w/Contact!",
    "name": "Contact!",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Prince_Ali_Rescue",
        "_type": "QuestNode",
        "href": "/w/Prince_Ali_Rescue",
        "name": "Prince Ali Rescue",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper",
        "_type": "QuestNode",
        "href": "/w/Icthlarin%27s_Little_Helper",
        "name": "Icthlarin's Little Helper",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
            "_type": "QuestNode",
            "href": "/w/Gertrude%27s_Cat",
            "name": "Gertrude's Cat",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Mountain Daughter": {
    "url": "http://oldschool.runescape.wiki/w/Mountain_Daughter",
    "_type": "QuestNode",
    "href": "/w/Mountain_Daughter",
    "name": "Mountain Daughter",
    "reqs": []
  },
  "Death to the Dorgeshuun": {
    "url": "http://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun",
    "_type": "QuestNode",
    "href": "/w/Death_to_the_Dorgeshuun",
    "name": "Death to the Dorgeshuun",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Lost_Tribe",
        "_type": "QuestNode",
        "href": "/w/The_Lost_Tribe",
        "name": "The Lost Tribe",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
            "_type": "QuestNode",
            "href": "/w/Goblin_Diplomacy",
            "name": "Goblin Diplomacy",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
            "_type": "QuestNode",
            "href": "/w/Rune_Mysteries",
            "name": "Rune Mysteries",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Darkness of Hallowvale": {
    "url": "http://oldschool.runescape.wiki/w/Darkness_of_Hallowvale",
    "_type": "QuestNode",
    "href": "/w/Darkness_of_Hallowvale",
    "name": "Darkness of Hallowvale",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque",
        "_type": "QuestNode",
        "href": "/w/In_Aid_of_the_Myreque",
        "name": "In Aid of the Myreque",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/In_Search_of_the_Myreque",
            "_type": "QuestNode",
            "href": "/w/In_Search_of_the_Myreque",
            "name": "In Search of the Myreque",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
                "_type": "QuestNode",
                "href": "/w/Nature_Spirit",
                "name": "Nature Spirit",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                    "_type": "QuestNode",
                    "href": "/w/Priest_in_Peril",
                    "name": "Priest in Peril",
                    "reqs": []
                  },
                  {
                    "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
                    "_type": "QuestNode",
                    "href": "/w/The_Restless_Ghost",
                    "name": "The Restless Ghost",
                    "reqs": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "Cook's Assistant": {
    "url": "http://oldschool.runescape.wiki/w/Cook%27s_Assistant",
    "_type": "QuestNode",
    "href": "/w/Cook%27s_Assistant",
    "name": "Cook's Assistant",
    "reqs": []
  },
  "Recipe for Disaster/Freeing Sir Amik Varze": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Sir_Amik_Varze",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Freeing_Sir_Amik_Varze",
    "name": "Recipe for Disaster/Freeing Sir Amik Varze",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Family_Crest",
        "_type": "QuestNode",
        "href": "/w/Family_Crest",
        "name": "Family Crest",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Heroes%27_Quest",
        "_type": "QuestNode",
        "href": "/w/Heroes%27_Quest",
        "name": "Heroes' Quest",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
            "_type": "QuestNode",
            "href": "/w/Shield_of_Arrav",
            "name": "Shield of Arrav",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Lost_City",
            "_type": "QuestNode",
            "href": "/w/Lost_City",
            "name": "Lost City",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
            "_type": "QuestNode",
            "href": "/w/Merlin%27s_Crystal",
            "name": "Merlin's Crystal",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
            "_type": "QuestNode",
            "href": "/w/Dragon_Slayer",
            "name": "Dragon Slayer",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
        "_type": "QuestNode",
        "href": "/w/Shilo_Village",
        "name": "Shilo Village",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
            "_type": "QuestNode",
            "href": "/w/Jungle_Potion",
            "name": "Jungle Potion",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
        "_type": "QuestNode",
        "href": "/w/Underground_Pass",
        "name": "Underground Pass",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Biohazard",
            "_type": "QuestNode",
            "href": "/w/Biohazard",
            "name": "Biohazard",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Plague_City",
                "_type": "QuestNode",
                "href": "/w/Plague_City",
                "name": "Plague City",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
        "_type": "QuestNode",
        "href": "/w/Waterfall_Quest",
        "name": "Waterfall Quest",
        "reqs": []
      }
    ]
  },
  "The Great Brain Robbery": {
    "url": "http://oldschool.runescape.wiki/w/The_Great_Brain_Robbery",
    "_type": "QuestNode",
    "href": "/w/The_Great_Brain_Robbery",
    "name": "The Great Brain Robbery",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain",
        "_type": "QuestNode",
        "href": "/w/Creature_of_Fenkenstrain",
        "name": "Creature of Fenkenstrain",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
            "_type": "QuestNode",
            "href": "/w/The_Restless_Ghost",
            "name": "The Restless Ghost",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Cabin_Fever",
        "_type": "QuestNode",
        "href": "/w/Cabin_Fever",
        "name": "Cabin Fever",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Pirate%27s_Treasure",
            "_type": "QuestNode",
            "href": "/w/Pirate%27s_Treasure",
            "name": "Pirate's Treasure",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Rum_Deal",
            "_type": "QuestNode",
            "href": "/w/Rum_Deal",
            "name": "Rum Deal",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters",
                "_type": "QuestNode",
                "href": "/w/Zogre_Flesh_Eaters",
                "name": "Zogre Flesh Eaters",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
                    "_type": "QuestNode",
                    "href": "/w/Big_Chompy_Bird_Hunting",
                    "name": "Big Chompy Bird Hunting",
                    "reqs": []
                  },
                  {
                    "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                    "_type": "QuestNode",
                    "href": "/w/Jungle_Potion",
                    "name": "Jungle Potion",
                    "reqs": [
                      {
                        "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                        "_type": "QuestNode",
                        "href": "/w/Druidic_Ritual",
                        "name": "Druidic Ritual",
                        "reqs": []
                      }
                    ]
                  }
                ]
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                "_type": "QuestNode",
                "href": "/w/Priest_in_Peril",
                "name": "Priest in Peril",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Pirate_Pete",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_Pirate_Pete",
        "name": "Recipe for Disaster/Freeing Pirate Pete",
        "reqs": []
      }
    ]
  },
  "Monkey Madness II": {
    "url": "http://oldschool.runescape.wiki/w/Monkey_Madness_II",
    "_type": "QuestNode",
    "href": "/w/Monkey_Madness_II",
    "name": "Monkey Madness II",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Enlightened_Journey",
        "_type": "QuestNode",
        "href": "/w/Enlightened_Journey",
        "name": "Enlightened Journey",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Eyes_of_Glouphrie",
        "_type": "QuestNode",
        "href": "/w/The_Eyes_of_Glouphrie",
        "name": "The Eyes of Glouphrie",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
            "_type": "QuestNode",
            "href": "/w/The_Grand_Tree",
            "name": "The Grand Tree",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_King_Awowogei",
        "_type": "QuestNode",
        "href": "/w/Recipe_for_Disaster/Freeing_King_Awowogei",
        "name": "Recipe for Disaster/Freeing King Awowogei",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Monkey_Madness_I",
            "_type": "QuestNode",
            "href": "/w/Monkey_Madness_I",
            "name": "Monkey Madness I",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
                "_type": "QuestNode",
                "href": "/w/The_Grand_Tree",
                "name": "The Grand Tree",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Tree_Gnome_Village",
                "_type": "QuestNode",
                "href": "/w/Tree_Gnome_Village",
                "name": "Tree Gnome Village",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
        "_type": "QuestNode",
        "href": "/w/Troll_Stronghold",
        "name": "Troll Stronghold",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
            "_type": "QuestNode",
            "href": "/w/Death_Plateau",
            "name": "Death Plateau",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Watchtower",
        "_type": "QuestNode",
        "href": "/w/Watchtower",
        "name": "Watchtower",
        "reqs": []
      }
    ]
  },
  "Sheep Shearer": {
    "url": "http://oldschool.runescape.wiki/w/Sheep_Shearer",
    "_type": "QuestNode",
    "href": "/w/Sheep_Shearer",
    "name": "Sheep Shearer",
    "reqs": []
  },
  "Ernest the Chicken": {
    "url": "http://oldschool.runescape.wiki/w/Ernest_the_Chicken",
    "_type": "QuestNode",
    "href": "/w/Ernest_the_Chicken",
    "name": "Ernest the Chicken",
    "reqs": []
  },
  "The Grand Tree": {
    "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
    "_type": "QuestNode",
    "href": "/w/The_Grand_Tree",
    "name": "The Grand Tree",
    "reqs": []
  },
  "Cold War": {
    "url": "http://oldschool.runescape.wiki/w/Cold_War",
    "_type": "QuestNode",
    "href": "/w/Cold_War",
    "name": "Cold War",
    "reqs": []
  },
  "Death Plateau": {
    "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
    "_type": "QuestNode",
    "href": "/w/Death_Plateau",
    "name": "Death Plateau",
    "reqs": []
  },
  "Making History": {
    "url": "http://oldschool.runescape.wiki/w/Making_History",
    "_type": "QuestNode",
    "href": "/w/Making_History",
    "name": "Making History",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
        "_type": "QuestNode",
        "href": "/w/Priest_in_Peril",
        "name": "Priest in Peril",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
        "_type": "QuestNode",
        "href": "/w/The_Restless_Ghost",
        "name": "The Restless Ghost",
        "reqs": []
      }
    ]
  },
  "Haunted Mine": {
    "url": "http://oldschool.runescape.wiki/w/Haunted_Mine",
    "_type": "QuestNode",
    "href": "/w/Haunted_Mine",
    "name": "Haunted Mine",
    "reqs": []
  },
  "The Eyes of Glouphrie": {
    "url": "http://oldschool.runescape.wiki/w/The_Eyes_of_Glouphrie",
    "_type": "QuestNode",
    "href": "/w/The_Eyes_of_Glouphrie",
    "name": "The Eyes of Glouphrie",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
        "_type": "QuestNode",
        "href": "/w/The_Grand_Tree",
        "name": "The Grand Tree",
        "reqs": []
      }
    ]
  },
  "Witch's House": {
    "url": "http://oldschool.runescape.wiki/w/Witch%27s_House",
    "_type": "QuestNode",
    "href": "/w/Witch%27s_House",
    "name": "Witch's House",
    "reqs": []
  },
  "Fairytale II - Cure a Queen": {
    "url": "http://oldschool.runescape.wiki/w/Fairytale_II_-_Cure_a_Queen",
    "_type": "QuestNode",
    "href": "/w/Fairytale_II_-_Cure_a_Queen",
    "name": "Fairytale II - Cure a Queen",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains",
        "_type": "QuestNode",
        "href": "/w/Fairytale_I_-_Growing_Pains",
        "name": "Fairytale I - Growing Pains",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Lost_City",
            "_type": "QuestNode",
            "href": "/w/Lost_City",
            "name": "Lost City",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
            "_type": "QuestNode",
            "href": "/w/Nature_Spirit",
            "name": "Nature Spirit",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                "_type": "QuestNode",
                "href": "/w/Priest_in_Peril",
                "name": "Priest in Peril",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
                "_type": "QuestNode",
                "href": "/w/The_Restless_Ghost",
                "name": "The Restless Ghost",
                "reqs": []
              }
            ]
          }
        ]
      }
    ]
  },
  "Imp Catcher": {
    "url": "http://oldschool.runescape.wiki/w/Imp_Catcher",
    "_type": "QuestNode",
    "href": "/w/Imp_Catcher",
    "name": "Imp Catcher",
    "reqs": []
  },
  "Recipe for Disaster/Freeing Evil Dave": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Evil_Dave",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Freeing_Evil_Dave",
    "name": "Recipe for Disaster/Freeing Evil Dave",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
        "_type": "QuestNode",
        "href": "/w/Gertrude%27s_Cat",
        "name": "Gertrude's Cat",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Shadow_of_the_Storm",
        "_type": "QuestNode",
        "href": "/w/Shadow_of_the_Storm",
        "name": "Shadow of the Storm",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Golem",
            "_type": "QuestNode",
            "href": "/w/The_Golem",
            "name": "The Golem",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Demon_Slayer",
        "_type": "QuestNode",
        "href": "/w/Demon_Slayer",
        "name": "Demon Slayer",
        "reqs": []
      }
    ]
  },
  "Fishing Contest": {
    "url": "http://oldschool.runescape.wiki/w/Fishing_Contest",
    "_type": "QuestNode",
    "href": "/w/Fishing_Contest",
    "name": "Fishing Contest",
    "reqs": []
  },
  "Eadgar's Ruse": {
    "url": "http://oldschool.runescape.wiki/w/Eadgar%27s_Ruse",
    "_type": "QuestNode",
    "href": "/w/Eadgar%27s_Ruse",
    "name": "Eadgar's Ruse",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
        "_type": "QuestNode",
        "href": "/w/Druidic_Ritual",
        "name": "Druidic Ritual",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
        "_type": "QuestNode",
        "href": "/w/Troll_Stronghold",
        "name": "Troll Stronghold",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
            "_type": "QuestNode",
            "href": "/w/Death_Plateau",
            "name": "Death Plateau",
            "reqs": []
          }
        ]
      }
    ]
  },
  "My Arm's Big Adventure": {
    "url": "http://oldschool.runescape.wiki/w/My_Arm%27s_Big_Adventure",
    "_type": "QuestNode",
    "href": "/w/My_Arm%27s_Big_Adventure",
    "name": "My Arm's Big Adventure",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Eadgar%27s_Ruse",
        "_type": "QuestNode",
        "href": "/w/Eadgar%27s_Ruse",
        "name": "Eadgar's Ruse",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
            "_type": "QuestNode",
            "href": "/w/Troll_Stronghold",
            "name": "Troll Stronghold",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
                "_type": "QuestNode",
                "href": "/w/Death_Plateau",
                "name": "Death Plateau",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Feud",
        "_type": "QuestNode",
        "href": "/w/The_Feud",
        "name": "The Feud",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
        "_type": "QuestNode",
        "href": "/w/Jungle_Potion",
        "name": "Jungle Potion",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Forgettable Tale...": {
    "url": "http://oldschool.runescape.wiki/w/Forgettable_Tale...",
    "_type": "QuestNode",
    "href": "/w/Forgettable_Tale...",
    "name": "Forgettable Tale...",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Giant_Dwarf",
        "_type": "QuestNode",
        "href": "/w/The_Giant_Dwarf",
        "name": "The Giant Dwarf",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Knight%27s_Sword",
            "_type": "QuestNode",
            "href": "/w/The_Knight%27s_Sword",
            "name": "The Knight's Sword",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Fishing_Contest",
        "_type": "QuestNode",
        "href": "/w/Fishing_Contest",
        "name": "Fishing Contest",
        "reqs": []
      }
    ]
  },
  "Recipe for Disaster/Another Cook's Quest": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Another_Cook%27s_Quest",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Another_Cook%27s_Quest",
    "name": "Recipe for Disaster/Another Cook's Quest",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Cook%27s_Assistant",
        "_type": "QuestNode",
        "href": "/w/Cook%27s_Assistant",
        "name": "Cook's Assistant",
        "reqs": []
      }
    ]
  },
  "Monkey Madness I": {
    "url": "http://oldschool.runescape.wiki/w/Monkey_Madness_I",
    "_type": "QuestNode",
    "href": "/w/Monkey_Madness_I",
    "name": "Monkey Madness I",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
        "_type": "QuestNode",
        "href": "/w/The_Grand_Tree",
        "name": "The Grand Tree",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Tree_Gnome_Village",
        "_type": "QuestNode",
        "href": "/w/Tree_Gnome_Village",
        "name": "Tree Gnome Village",
        "reqs": []
      }
    ]
  },
  "Another Slice of H.A.M.": {
    "url": "http://oldschool.runescape.wiki/w/Another_Slice_of_H.A.M.",
    "_type": "QuestNode",
    "href": "/w/Another_Slice_of_H.A.M.",
    "name": "Another Slice of H.A.M.",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun",
        "_type": "QuestNode",
        "href": "/w/Death_to_the_Dorgeshuun",
        "name": "Death to the Dorgeshuun",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Lost_Tribe",
            "_type": "QuestNode",
            "href": "/w/The_Lost_Tribe",
            "name": "The Lost Tribe",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
                "_type": "QuestNode",
                "href": "/w/Goblin_Diplomacy",
                "name": "Goblin Diplomacy",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
                "_type": "QuestNode",
                "href": "/w/Rune_Mysteries",
                "name": "Rune Mysteries",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Giant_Dwarf",
        "_type": "QuestNode",
        "href": "/w/The_Giant_Dwarf",
        "name": "The Giant Dwarf",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Knight%27s_Sword",
            "_type": "QuestNode",
            "href": "/w/The_Knight%27s_Sword",
            "name": "The Knight's Sword",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Dig_Site",
        "_type": "QuestNode",
        "href": "/w/The_Dig_Site",
        "name": "The Dig Site",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Tale of the Righteous": {
    "url": "http://oldschool.runescape.wiki/w/Tale_of_the_Righteous",
    "_type": "QuestNode",
    "href": "/w/Tale_of_the_Righteous",
    "name": "Tale of the Righteous",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Client_of_Kourend",
        "_type": "QuestNode",
        "href": "/w/Client_of_Kourend",
        "name": "Client of Kourend",
        "reqs": []
      }
    ]
  },
  "The Lost Tribe": {
    "url": "http://oldschool.runescape.wiki/w/The_Lost_Tribe",
    "_type": "QuestNode",
    "href": "/w/The_Lost_Tribe",
    "name": "The Lost Tribe",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Goblin_Diplomacy",
        "_type": "QuestNode",
        "href": "/w/Goblin_Diplomacy",
        "name": "Goblin Diplomacy",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
        "_type": "QuestNode",
        "href": "/w/Rune_Mysteries",
        "name": "Rune Mysteries",
        "reqs": []
      }
    ]
  },
  "Recipe for Disaster/Freeing King Awowogei": {
    "url": "http://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_King_Awowogei",
    "_type": "QuestNode",
    "href": "/w/Recipe_for_Disaster/Freeing_King_Awowogei",
    "name": "Recipe for Disaster/Freeing King Awowogei",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Monkey_Madness_I",
        "_type": "QuestNode",
        "href": "/w/Monkey_Madness_I",
        "name": "Monkey Madness I",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Grand_Tree",
            "_type": "QuestNode",
            "href": "/w/The_Grand_Tree",
            "name": "The Grand Tree",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Tree_Gnome_Village",
            "_type": "QuestNode",
            "href": "/w/Tree_Gnome_Village",
            "name": "Tree Gnome Village",
            "reqs": []
          }
        ]
      }
    ]
  },
  "King's Ransom": {
    "url": "http://oldschool.runescape.wiki/w/King%27s_Ransom",
    "_type": "QuestNode",
    "href": "/w/King%27s_Ransom",
    "name": "King's Ransom",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Black_Knights%27_Fortress",
        "_type": "QuestNode",
        "href": "/w/Black_Knights%27_Fortress",
        "name": "Black Knights' Fortress",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Holy_Grail",
        "_type": "QuestNode",
        "href": "/w/Holy_Grail",
        "name": "Holy Grail",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
        "_type": "QuestNode",
        "href": "/w/Merlin%27s_Crystal",
        "name": "Merlin's Crystal",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Murder_Mystery",
        "_type": "QuestNode",
        "href": "/w/Murder_Mystery",
        "name": "Murder Mystery",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/One_Small_Favour",
        "_type": "QuestNode",
        "href": "/w/One_Small_Favour",
        "name": "One Small Favour",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
            "_type": "QuestNode",
            "href": "/w/Rune_Mysteries",
            "name": "Rune Mysteries",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
            "_type": "QuestNode",
            "href": "/w/Shilo_Village",
            "name": "Shilo Village",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                "_type": "QuestNode",
                "href": "/w/Jungle_Potion",
                "name": "Jungle Potion",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                    "_type": "QuestNode",
                    "href": "/w/Druidic_Ritual",
                    "name": "Druidic Ritual",
                    "reqs": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "Tree Gnome Village": {
    "url": "http://oldschool.runescape.wiki/w/Tree_Gnome_Village",
    "_type": "QuestNode",
    "href": "/w/Tree_Gnome_Village",
    "name": "Tree Gnome Village",
    "reqs": []
  },
  "Lost City": {
    "url": "http://oldschool.runescape.wiki/w/Lost_City",
    "_type": "QuestNode",
    "href": "/w/Lost_City",
    "name": "Lost City",
    "reqs": []
  },
  "Tai Bwo Wannai Trio": {
    "url": "http://oldschool.runescape.wiki/w/Tai_Bwo_Wannai_Trio",
    "_type": "QuestNode",
    "href": "/w/Tai_Bwo_Wannai_Trio",
    "name": "Tai Bwo Wannai Trio",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
        "_type": "QuestNode",
        "href": "/w/Jungle_Potion",
        "name": "Jungle Potion",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      }
    ]
  },
  "The Queen of Thieves": {
    "url": "http://oldschool.runescape.wiki/w/The_Queen_of_Thieves",
    "_type": "QuestNode",
    "href": "/w/The_Queen_of_Thieves",
    "name": "The Queen of Thieves",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Client_of_Kourend",
        "_type": "QuestNode",
        "href": "/w/Client_of_Kourend",
        "name": "Client of Kourend",
        "reqs": []
      }
    ]
  },
  "Pirate's Treasure": {
    "url": "http://oldschool.runescape.wiki/w/Pirate%27s_Treasure",
    "_type": "QuestNode",
    "href": "/w/Pirate%27s_Treasure",
    "name": "Pirate's Treasure",
    "reqs": []
  },
  "Ratcatchers": {
    "url": "http://oldschool.runescape.wiki/w/Ratcatchers",
    "_type": "QuestNode",
    "href": "/w/Ratcatchers",
    "name": "Ratcatchers",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper",
        "_type": "QuestNode",
        "href": "/w/Icthlarin%27s_Little_Helper",
        "name": "Icthlarin's Little Helper",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
            "_type": "QuestNode",
            "href": "/w/Gertrude%27s_Cat",
            "name": "Gertrude's Cat",
            "reqs": []
          }
        ]
      }
    ]
  },
  "The Hand in the Sand": {
    "url": "http://oldschool.runescape.wiki/w/The_Hand_in_the_Sand",
    "_type": "QuestNode",
    "href": "/w/The_Hand_in_the_Sand",
    "name": "The Hand in the Sand",
    "reqs": []
  },
  "Dream Mentor": {
    "url": "http://oldschool.runescape.wiki/w/Dream_Mentor",
    "_type": "QuestNode",
    "href": "/w/Dream_Mentor",
    "name": "Dream Mentor",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Lunar_Diplomacy",
        "_type": "QuestNode",
        "href": "/w/Lunar_Diplomacy",
        "name": "Lunar Diplomacy",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Trials",
            "_type": "QuestNode",
            "href": "/w/The_Fremennik_Trials",
            "name": "The Fremennik Trials",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Lost_City",
            "_type": "QuestNode",
            "href": "/w/Lost_City",
            "name": "Lost City",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
            "_type": "QuestNode",
            "href": "/w/Rune_Mysteries",
            "name": "Rune Mysteries",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
            "_type": "QuestNode",
            "href": "/w/Shilo_Village",
            "name": "Shilo Village",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                "_type": "QuestNode",
                "href": "/w/Jungle_Potion",
                "name": "Jungle Potion",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                    "_type": "QuestNode",
                    "href": "/w/Druidic_Ritual",
                    "name": "Druidic Ritual",
                    "reqs": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Eadgar%27s_Ruse",
        "_type": "QuestNode",
        "href": "/w/Eadgar%27s_Ruse",
        "name": "Eadgar's Ruse",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
            "_type": "QuestNode",
            "href": "/w/Troll_Stronghold",
            "name": "Troll Stronghold",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
                "_type": "QuestNode",
                "href": "/w/Death_Plateau",
                "name": "Death Plateau",
                "reqs": []
              }
            ]
          }
        ]
      }
    ]
  },
  "Cabin Fever": {
    "url": "http://oldschool.runescape.wiki/w/Cabin_Fever",
    "_type": "QuestNode",
    "href": "/w/Cabin_Fever",
    "name": "Cabin Fever",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Pirate%27s_Treasure",
        "_type": "QuestNode",
        "href": "/w/Pirate%27s_Treasure",
        "name": "Pirate's Treasure",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Rum_Deal",
        "_type": "QuestNode",
        "href": "/w/Rum_Deal",
        "name": "Rum Deal",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters",
            "_type": "QuestNode",
            "href": "/w/Zogre_Flesh_Eaters",
            "name": "Zogre Flesh Eaters",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
                "_type": "QuestNode",
                "href": "/w/Big_Chompy_Bird_Hunting",
                "name": "Big Chompy Bird Hunting",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                "_type": "QuestNode",
                "href": "/w/Jungle_Potion",
                "name": "Jungle Potion",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                    "_type": "QuestNode",
                    "href": "/w/Druidic_Ritual",
                    "name": "Druidic Ritual",
                    "reqs": []
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Dwarf Cannon": {
    "url": "http://oldschool.runescape.wiki/w/Dwarf_Cannon",
    "_type": "QuestNode",
    "href": "/w/Dwarf_Cannon",
    "name": "Dwarf Cannon",
    "reqs": []
  },
  "Lunar Diplomacy": {
    "url": "http://oldschool.runescape.wiki/w/Lunar_Diplomacy",
    "_type": "QuestNode",
    "href": "/w/Lunar_Diplomacy",
    "name": "Lunar Diplomacy",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Trials",
        "_type": "QuestNode",
        "href": "/w/The_Fremennik_Trials",
        "name": "The Fremennik Trials",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Lost_City",
        "_type": "QuestNode",
        "href": "/w/Lost_City",
        "name": "Lost City",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
        "_type": "QuestNode",
        "href": "/w/Rune_Mysteries",
        "name": "Rune Mysteries",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
        "_type": "QuestNode",
        "href": "/w/Shilo_Village",
        "name": "Shilo Village",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
            "_type": "QuestNode",
            "href": "/w/Jungle_Potion",
            "name": "Jungle Potion",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          }
        ]
      }
    ]
  },
  "A Tail of Two Cats": {
    "url": "http://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats",
    "_type": "QuestNode",
    "href": "/w/A_Tail_of_Two_Cats",
    "name": "A Tail of Two Cats",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper",
        "_type": "QuestNode",
        "href": "/w/Icthlarin%27s_Little_Helper",
        "name": "Icthlarin's Little Helper",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
            "_type": "QuestNode",
            "href": "/w/Gertrude%27s_Cat",
            "name": "Gertrude's Cat",
            "reqs": []
          }
        ]
      }
    ]
  },
  "Misthalin Mystery": {
    "url": "http://oldschool.runescape.wiki/w/Misthalin_Mystery",
    "_type": "QuestNode",
    "href": "/w/Misthalin_Mystery",
    "name": "Misthalin Mystery",
    "reqs": []
  },
  "In Aid of the Myreque": {
    "url": "http://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque",
    "_type": "QuestNode",
    "href": "/w/In_Aid_of_the_Myreque",
    "name": "In Aid of the Myreque",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/In_Search_of_the_Myreque",
        "_type": "QuestNode",
        "href": "/w/In_Search_of_the_Myreque",
        "name": "In Search of the Myreque",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Nature_Spirit",
            "_type": "QuestNode",
            "href": "/w/Nature_Spirit",
            "name": "Nature Spirit",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
                "_type": "QuestNode",
                "href": "/w/Priest_in_Peril",
                "name": "Priest in Peril",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
                "_type": "QuestNode",
                "href": "/w/The_Restless_Ghost",
                "name": "The Restless Ghost",
                "reqs": []
              }
            ]
          }
        ]
      }
    ]
  },
  "Dragon Slayer II": {
    "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer_II",
    "_type": "QuestNode",
    "href": "/w/Dragon_Slayer_II",
    "name": "Dragon Slayer II",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Legends%27_Quest",
        "_type": "QuestNode",
        "href": "/w/Legends%27_Quest",
        "name": "Legends' Quest",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Family_Crest",
            "_type": "QuestNode",
            "href": "/w/Family_Crest",
            "name": "Family Crest",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Heroes%27_Quest",
            "_type": "QuestNode",
            "href": "/w/Heroes%27_Quest",
            "name": "Heroes' Quest",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Shield_of_Arrav",
                "_type": "QuestNode",
                "href": "/w/Shield_of_Arrav",
                "name": "Shield of Arrav",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Lost_City",
                "_type": "QuestNode",
                "href": "/w/Lost_City",
                "name": "Lost City",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
                "_type": "QuestNode",
                "href": "/w/Merlin%27s_Crystal",
                "name": "Merlin's Crystal",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Dragon_Slayer",
                "_type": "QuestNode",
                "href": "/w/Dragon_Slayer",
                "name": "Dragon Slayer",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
            "_type": "QuestNode",
            "href": "/w/Shilo_Village",
            "name": "Shilo Village",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                "_type": "QuestNode",
                "href": "/w/Jungle_Potion",
                "name": "Jungle Potion",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                    "_type": "QuestNode",
                    "href": "/w/Druidic_Ritual",
                    "name": "Druidic Ritual",
                    "reqs": []
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Underground_Pass",
            "_type": "QuestNode",
            "href": "/w/Underground_Pass",
            "name": "Underground Pass",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Biohazard",
                "_type": "QuestNode",
                "href": "/w/Biohazard",
                "name": "Biohazard",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Plague_City",
                    "_type": "QuestNode",
                    "href": "/w/Plague_City",
                    "name": "Plague City",
                    "reqs": []
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Waterfall_Quest",
            "_type": "QuestNode",
            "href": "/w/Waterfall_Quest",
            "name": "Waterfall Quest",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Dream_Mentor",
        "_type": "QuestNode",
        "href": "/w/Dream_Mentor",
        "name": "Dream Mentor",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Lunar_Diplomacy",
            "_type": "QuestNode",
            "href": "/w/Lunar_Diplomacy",
            "name": "Lunar Diplomacy",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Trials",
                "_type": "QuestNode",
                "href": "/w/The_Fremennik_Trials",
                "name": "The Fremennik Trials",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Lost_City",
                "_type": "QuestNode",
                "href": "/w/Lost_City",
                "name": "Lost City",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Rune_Mysteries",
                "_type": "QuestNode",
                "href": "/w/Rune_Mysteries",
                "name": "Rune Mysteries",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Shilo_Village",
                "_type": "QuestNode",
                "href": "/w/Shilo_Village",
                "name": "Shilo Village",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
                    "_type": "QuestNode",
                    "href": "/w/Jungle_Potion",
                    "name": "Jungle Potion",
                    "reqs": [
                      {
                        "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                        "_type": "QuestNode",
                        "href": "/w/Druidic_Ritual",
                        "name": "Druidic Ritual",
                        "reqs": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Eadgar%27s_Ruse",
            "_type": "QuestNode",
            "href": "/w/Eadgar%27s_Ruse",
            "name": "Eadgar's Ruse",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
                "_type": "QuestNode",
                "href": "/w/Druidic_Ritual",
                "name": "Druidic Ritual",
                "reqs": []
              },
              {
                "url": "http://oldschool.runescape.wiki/w/Troll_Stronghold",
                "_type": "QuestNode",
                "href": "/w/Troll_Stronghold",
                "name": "Troll Stronghold",
                "reqs": [
                  {
                    "url": "http://oldschool.runescape.wiki/w/Death_Plateau",
                    "_type": "QuestNode",
                    "href": "/w/Death_Plateau",
                    "name": "Death Plateau",
                    "reqs": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats",
        "_type": "QuestNode",
        "href": "/w/A_Tail_of_Two_Cats",
        "name": "A Tail of Two Cats",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper",
            "_type": "QuestNode",
            "href": "/w/Icthlarin%27s_Little_Helper",
            "name": "Icthlarin's Little Helper",
            "reqs": [
              {
                "url": "http://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
                "_type": "QuestNode",
                "href": "/w/Gertrude%27s_Cat",
                "name": "Gertrude's Cat",
                "reqs": []
              }
            ]
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Animal_Magnetism",
        "_type": "QuestNode",
        "href": "/w/Animal_Magnetism",
        "name": "Animal Magnetism",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
            "_type": "QuestNode",
            "href": "/w/The_Restless_Ghost",
            "name": "The Restless Ghost",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Ernest_the_Chicken",
            "_type": "QuestNode",
            "href": "/w/Ernest_the_Chicken",
            "name": "Ernest the Chicken",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Ghosts_Ahoy",
        "_type": "QuestNode",
        "href": "/w/Ghosts_Ahoy",
        "name": "Ghosts Ahoy",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/The_Restless_Ghost",
            "_type": "QuestNode",
            "href": "/w/The_Restless_Ghost",
            "name": "The Restless Ghost",
            "reqs": []
          },
          {
            "url": "http://oldschool.runescape.wiki/w/Priest_in_Peril",
            "_type": "QuestNode",
            "href": "/w/Priest_in_Peril",
            "name": "Priest in Peril",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Bone_Voyage",
        "_type": "QuestNode",
        "href": "/w/Bone_Voyage",
        "name": "Bone Voyage",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/The_Dig_Site",
        "_type": "QuestNode",
        "href": "/w/The_Dig_Site",
        "name": "The Dig Site",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Client_of_Kourend",
        "_type": "QuestNode",
        "href": "/w/Client_of_Kourend",
        "name": "Client of Kourend",
        "reqs": []
      }
    ]
  },
  "Vampire Slayer": {
    "url": "http://oldschool.runescape.wiki/w/Vampire_Slayer",
    "_type": "QuestNode",
    "href": "/w/Vampire_Slayer",
    "name": "Vampire Slayer",
    "reqs": []
  },
  "Zogre Flesh Eaters": {
    "url": "http://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters",
    "_type": "QuestNode",
    "href": "/w/Zogre_Flesh_Eaters",
    "name": "Zogre Flesh Eaters",
    "reqs": [
      {
        "url": "http://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
        "_type": "QuestNode",
        "href": "/w/Big_Chompy_Bird_Hunting",
        "name": "Big Chompy Bird Hunting",
        "reqs": []
      },
      {
        "url": "http://oldschool.runescape.wiki/w/Jungle_Potion",
        "_type": "QuestNode",
        "href": "/w/Jungle_Potion",
        "name": "Jungle Potion",
        "reqs": [
          {
            "url": "http://oldschool.runescape.wiki/w/Druidic_Ritual",
            "_type": "QuestNode",
            "href": "/w/Druidic_Ritual",
            "name": "Druidic Ritual",
            "reqs": []
          }
        ]
      }
    ]
  },
  "The Fremennik Trials": {
    "url": "http://oldschool.runescape.wiki/w/The_Fremennik_Trials",
    "_type": "QuestNode",
    "href": "/w/The_Fremennik_Trials",
    "name": "The Fremennik Trials",
    "reqs": []
  },
  "Horror from the Deep": {
    "url": "http://oldschool.runescape.wiki/w/Horror_from_the_Deep",
    "_type": "QuestNode",
    "href": "/w/Horror_from_the_Deep",
    "name": "Horror from the Deep",
    "reqs": []
  },
  "Sea Slug": {
    "url": "http://oldschool.runescape.wiki/w/Sea_Slug",
    "_type": "QuestNode",
    "href": "/w/Sea_Slug",
    "name": "Sea Slug",
    "reqs": []
  }
}