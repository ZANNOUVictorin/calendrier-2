<script setup>
import { ref } from 'vue';

let datec = ref(""); // Jour sélectionné
let datData = ref(""); // Détails de l'événement
let events = ref({ // Objet pour stocker les événements par jour
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
});

function choseDate(date) {
    datec.value = date; // Met à jour le jour sélectionné
}

function add() {
    if (datec.value && datData.value) {
        // Ajoute l'événement au jour sélectionné
        events.value[datec.value].push(datData.value);
        datData.value = ""; // Réinitialise les détails de l'événement
    } else {
        alert('Please select a day and enter event details.');
    }
}
</script>

<template>
<div>
    <div class="form-container">
        <h1>Add a new event</h1>
        <h2>Selected Day: {{ datec }}</h2>
        <form @submit.prevent="add">
            <input type="text" v-model="datData" placeholder="Enter event details" required>
            <input type="submit" value="Submit">
        </form>
    </div>
    <table>
        <thead>
            <tr>
                <th><span @click="choseDate('Monday')">Monday</span></th>
                <th><span @click="choseDate('Tuesday')">Tuesday</span></th>
                <th><span @click="choseDate('Wednesday')">Wednesday</span></th>
                <th><span @click="choseDate('Thursday')">Thursday</span></th>
                <th><span @click="choseDate('Friday')">Friday</span></th>
                <th><span @click="choseDate('Saturday')">Saturday</span></th>
                <th><span @click="choseDate('Sunday')">Sunday</span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>{{ events.Monday.join(', ') }}</td>
<td>{{ events.Tuesday.join(', ') }}</td>
<td>{{ events.Wednesday.join(', ') }}</td>
<td>{{ events.Thursday.join(', ') }}</td>
<td>{{ events.Friday.join(', ') }}</td>
<td>{{ events.Saturday.join(', ') }}</td>
<td>{{ events.Sunday.join(', ') }}</td>

                   </tr>
        </tbody>
    </table>
</div>
</template>

<style scoped>
.form-container {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}
h1 {
    font-size: 24px;
    margin-bottom: 10px;
}
h2 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #00796b;
}
input[type="text"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #00796b;
    margin-bottom: 20px;
    outline: none;
}
input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #00796b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}
input[type="submit"]:hover {
    background-color: #004d40;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin: auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
th {
    background-color: #e0f7fa;
    padding: 15px;
}
th span {
    display: block;
    text-align: center;
    font-weight: bold;
    color: #00796b;
}
td {
    background-color: #ffffff;
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
}
tr:nth-child(even) td {
    background-color: #f1f8e9;
}
tr:hover td {
    background-color: #c8e6c9;
}
</style>
