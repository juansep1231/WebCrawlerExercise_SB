import {
  extractNumber,
  getComments,
  getNumber,
  getPoints,
  getTitle,
} from "../../src/controller/scraper";

import * as cheerio from "cheerio";
describe("extractNumber", () => {
  describe("When the text matches the regex", () => {
    it("should return the correct number", () => {
      const text = "This text has Rank 1.";
      const regex = /(\d+)\./;
      const result = extractNumber(text, regex);
      expect(result).toBe(1);
    });
  });

  describe("When the text does not match the regex", () => {
    it("should return 0", () => {
      const text = "Text with no rank";
      const regex = /(\d+)\./;
      const result = extractNumber(text, regex);
      expect(result).toBe(0);
    });
  });
});

describe("getNumber", () => {
  it("should extract the correct number from a cheerio element", () => {
    const html = '<div><span class="rank">2.</span></div>';
    const $ = cheerio.load(html);
    const number = getNumber($("div"));
    expect(number).toBe(2);
  });
});

describe("getTitle", () => {
  it("should extract the correct title from a cheerio element", () => {
    const html =
      '<div><span class="titleline"><a href="#">Title Example</a></span></div>';
    const $ = cheerio.load(html);
    const title = getTitle($("div"));
    expect(title).toBe("Title Example");
  });
});

describe("getPoints", () => {
  it("should extract the correct points", () => {
    const html = `
      <table>
          <tr class="athing" id="41601730">
            <td align="right" valign="top" class="title"></td>
            <td valign="top" class="votelinks"></td>
            <td class="title"></td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td class="subtext">
              <span class="subline">
                <span class="score" id="score_41601730">55 points</span>
              </span>
              <a href="user?id=tanelpoder" class="hnuser">tanelpoder</a>
              <a href="item?id=41601730">118&nbsp;comments</a>
            </td>
          </tr>
      </table>
      `;
    const $ = cheerio.load(html);
    const element = $(".athing");
    const points = getPoints(element);

    expect(points).toBe(55);
  });
});

describe("getComments", () => {
  it("should extract the correct number of comments", () => {
    const html = `
    <table>
          <tr class="athing" id="41601730">
            <td align="right" valign="top" class="title"></td>
            <td valign="top" class="votelinks"></td>
            <td class="title"></td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td class="subtext">
              <span class="subline">
                <span class="score" id="score_41601730">55 points</span>
              </span>
              <a href="user?id=tanelpoder" class="hnuser">tanelpoder</a>
              <a href="item?id=41601730">118&nbsp;comments</a>
            </td>
          </tr>
      </table>
      `;
    const $ = cheerio.load(html);
    const comments = getComments($(".athing"));
    expect(comments).toBe(118);
  });
});
