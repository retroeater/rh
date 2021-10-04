class Monster {

	constructor(level) {
		this.level = level
		this.offense = level
		this.defense = level
		this.hp = level * 3
		this.exp = level
		this.gold = level

		switch(level) {
			case 1:
				this.name = 'スライム'
				this.image = 'img/fantasy_game_character_slime.png'
				break
			case 2:
				this.name = 'ゴブリン'
				this.image = 'img/fantasy_goblin.png'
				break
			case 3:
				this.name = 'ウーパールーパー'
				this.image = 'img/monster12.png'
				break
			case 4:
				this.name = 'ヒトツメ'
				this.image = 'img/monster01.png'
				break
			case 5:
				this.name = 'イツツメ'
				this.image = 'img/monster03.png'
				break
			case 6:
				this.name = 'ゴーレム'
				this.image = 'img/fantasy_golem.png'
				break
			case 7:
				this.name = 'デュラハン'
				this.image = 'img/fantasy_dullahan.png'
				break
			case 8:
				this.name = '暗黒導師'
				this.image = 'img/mahoutsukai_necromancer.png'
				break
			case 9:
				this.name = 'ドラゴン'
				this.image = 'img/fantasy_dragon_wyvern.png'
				break
			case 10:
				this.name = '魔王'
				this.image = 'img/fantasy_maou_devil.png'
				break
			default:
				this.name = '裏ボス'
				this.image = 'img/kids_chuunibyou_boy.png'
				break
		}
	}
	setHp(hp) {
		this.hp = hp
	}
}
