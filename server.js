const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

const isArmstrong = (num) => {
    const digits = num.toString().split("");
    const power = digits.length;
    return digits.reduce((sum, digit) => sum + Math.pow(parseInt(digit), power), 0) === num;
};

const sumOfDigits = (num) => num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);

app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);
    const properties = [];
    if (num % 2 === 0) properties.push("even");
    else properties.push("odd");
    if (isPrime(num)) properties.push("prime");
    if (isPerfect(num)) properties.push("perfect");
    if (isArmstrong(num)) properties.push("armstrong");

    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}?json`);
        const funFact = funFactResponse.data.text || `No fun fact found for ${num}`;

        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: sumOfDigits(num),
            fun_fact: funFact,
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching fun fact" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));