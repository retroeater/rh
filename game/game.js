// URLからパラメータを取り出す
const params = (new URL(document.location)).searchParams
let playerName = params.get('name')
let playerHp = params.get('hp')
let playerExp = Number(params.get('exp'))
let playerGold = Number(params.get('gold'))
let level = Number(params.get('level'))

if(!playerName) {
	playerName = prompt('キャラの名前を決めてね！')
	level = -1
}

const player = new Player(playerName)

// 初回プレイでない場合は、HPと経験値とゴールドを引き継ぎ
if(playerExp) {
	player.setHp(playerHp)
	player.setExp(playerExp)
	player.setGold(playerGold)
	player.setLevelByExp(playerExp)
	player.setOffense(player.level)
}

if(level === -1) {

	document.write(
		'ゲームやっぞ（仮）<br>' +
		'<p></p>' +
		'<p><img width="60" height="60" src="img/royal_hadaka_king.png" /></p>' +
		'王様「よう来たな、' + player.name + '」<br>' +
		'王様「最近魔王が復活した」<br>' +
		'王様「お前はもう冒険に出る歳だ」<br>' +
		'王様「地下に潜れ、' + player.name + '」<br>' +
		player.name + '「うるせえ」'
	)

	document.write(
		'<p><a href="' + getUrl(1) + '">地下に潜る</a></p>'
	)
}
else if(level === 0) {

	player.setHp(10 + (player.level * 3))

	player.showStatus()

	document.write(
		'<p><img width="240" height="240" src="img/royal_hadaka_king.png" /></p>' +
		'<p>' +
		'王様「おお、' + player.name + 'よ、死んでしまうとは何事だ！」<br>' +
		'王様「もう魔王倒すまで帰ってこなくていいよ」<br>' +
		'王様「はよ行け」<br>' +
		player.name + '「クソが」'
	)

	document.write(
		'<p><a href="' + getUrl(1) + '">地下に潜る</a></p>'
	)
}
else {
	let monster = new Monster(level)

	player.showStatus()

	let isDead = battle(player,monster)

	if(isDead) {
		document.write(
			'<p><a href="' + getUrl(0) + '">城に強制送還される</a></p>'
		)
	}
	else {

		// 経験値とゴールドを手に入れる
		player.setExp(player.exp + monster.exp)
		player.setGold(player.gold + monster.gold)

		document.write(
			'<p>' +
			player.name + 'は' + monster.exp + 'の経験値を手に入れた！<br>' +
			player.name + 'は' + monster.gold + 'ゴールドを手に入れた！<br>' +
			'<img width="60" height="60" src="img/kaizoku_takara.png" /><br>' +
			'</p>'
		)

		player.showStatus()

		// TODO: レベルアップの判定追加
//		player.calcLevel()

		let nextLevel = level + 1

		document.write(
			'<p><a href="' + getUrl(nextLevel) + '">地下' + nextLevel + '階に下りる</a></p>'
		)

		// 地下1階以外は1つ上の階に戻れる
		if(level !== 1) {
			let prevLevel = level - 1

			document.write(
				'<p><a href="' + getUrl(prevLevel) + '">地下' + prevLevel + '階に上がる</a></p>'
			)
		}
	}
}

function battle(player,monster) {

	let isDead = false

	document.write(
		'<p>' +
		monster.name + 'が現れた！<br>' +
		'<img width="60" height="60" src="' + monster.image + '" /><br>' + 
		'</p>'
	)

	while(true) {

		//まず自分の攻撃
		document.write(
			'<p>' +
			player.name + 'の攻撃！<br>' +
			monster.name + 'に' +player.offense + 'のダメージ！<br>' +
			'</p>'
		)
		//相手のHP減らす
		monster.setHp(monster.hp - player.offense)

		//相手が死んだかチェック
		if(monster.hp <= 0) {
			//死んでたら勝利で終了
			document.write(
				'<p>' +
				player.name + 'は戦いに勝利した！<br>' +
				'</p>' 
			)
			break
		}

		//死んでなかったら相手の攻撃
		document.write(
			'<p>' +
			monster.name + 'の攻撃！<br>' +
			player.name + 'に' + monster.offense + 'のダメージ！<br>' +
			'</p>'
		)
		//自分のHP減らす
		player.setHp(player.hp - monster.offense)

		//自分が死んだかチェック
		if(player.hp <= 0) {
			//死んでたら敗北で終了
			isDead = true
			document.write(
				'<p>' +
				player.name + 'は死んでしまった！<br>' +
				'<img width="60" height="60" src="img/ohaka_seiyou.png" /><br>' +
				'</p>' 
			)
			break
		}
		//死んでなかったら自分の攻撃
	}

	return isDead
}

function getUrl(level) {

	let url = './index.html'
	url += '?level=' + level
	url += '&name=' + player.name
	url += '&hp=' + player.hp
	url += '&exp=' + player.exp
	url += '&gold=' + player.gold

	return url
}