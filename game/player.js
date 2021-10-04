class Player {

	constructor(playerName) {
		this.level = 1
		this.name = playerName
		this.offense = 1
		this.defense = 1
		this.hp = 10
		this.exp = 0
		this.gold = 100
	}
	getNextLevel() {
		return this.level + 1
	}
	setLevelByExp(exp) {
		let remainingExp = exp

		while(remainingExp > 0) {

			let nextLevel = this.level + 1
			let requiredExp = nextLevel ** 2
			remainingExp = remainingExp - requiredExp
			if(remainingExp >= 0) {
				this.level = nextLevel
			}
			else {
				break
			}
		}
	}
	setExp(exp) {
		this.exp = exp
	}
	setGold(gold) {
		this.gold = gold
	}
	setHp(newHp) {
		this.hp = newHp
	}
	setOffense(offense) {
		this.offense = offense
	}
	showStatus() {

		document.write(
			'<table>' +
			'<tr><td>【名】</td><td align="right">' + this.name + '</td></tr>' +
			'<tr><td>【LV】</td><td align="right">' + this.level + '</td></tr>' +
			'<tr><td>【攻】</td><td align="right">' + this.offense + '</td></tr>' +
//			'<tr><td>【防】</td><td align="right">' + this.defence + '</td></tr>' +
			'<tr><td>【体】</td><td align="right">' + this.hp + '</td></tr>' +
			'<tr><td>【経】</td><td align="right">' + this.exp + '</td></tr>' +
//			'<tr><td>【金】</td><td align="right">' + this.gold + '</td></tr>' +
			'</table>'
		)
	}	
}
