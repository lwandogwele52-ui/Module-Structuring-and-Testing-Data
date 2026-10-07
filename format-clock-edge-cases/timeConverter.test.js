import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function(){
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function() {
    assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("midnight hour becomes 12 am", function() {
    assert.equal(formatAs12HourClock("00:00"), "12:00 am");
    assert.equal(formatAs12HourClock("00:30"), "12:30 am");
    assert.equal(formatAs12HourClock("00:59"), "12:59 am");
});

test("early morning hours are padded and stay am", function() {
    assert.equal(formatAs12HourClock("01:00"), "01:00 am");
    assert.equal(formatAs12HourClock("09:05"), "09:05 am");
    assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("noon hour becomes 12 pm", function() {
    assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
    assert.equal(formatAs12HourClock("12:30"), "12:30 pm");
    assert.equal(formatAs12HourClock("12:59"), "12:59 pm");
});

test("afternoon hours are padded and keep their minutes", function() {
    assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
    assert.equal(formatAs12HourClock("15:45"), "03:45 pm");
    assert.equal(formatAs12HourClock("21:07"), "09:07 pm");
});

test("late evening hours stay pm", function() {
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
    assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});