const isSingleSpeed = (enemy) => (
    enemy.maxSpeed === enemy.minSpeed
)

const formatSpeed = (enemy) => (
    isSingleSpeed(enemy)
        ? enemy.maxSpeed
        : enemy.minSpeed + " to " + enemy.maxSpeed
)

const calculateDamage = (enemy) => (
    Math.floor((
        //base
        enemy.attackPower * enemy.attackMultiplier * enemy.attackPercent / 100
        +
        // 1.5x possible multiplier
        enemy.attackPower * enemy.attackMultiplier * enemy.attackPercent * 1.5 / 100)
        //average them together
        / 2)
)

const formatAttack = (enemy) => (
    `${enemy.attackPower}  ${enemy.attackMultiplier}x ${enemy.attackPercent}%`
)

const darkWaveMax = (enemy => (
    enemy.attackMultiplier * enemy.attackPower / 2) + enemy.attackPower
)

const Utils = {
    isSingleSpeed: isSingleSpeed,
    formatSpeed: formatSpeed,
    calculateDamage: calculateDamage,
    formatAttack: formatAttack,
    darkWaveMax: darkWaveMax
}

export default Utils;