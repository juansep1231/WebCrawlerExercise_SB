import {
  filterTitlesLessThanFiveWords,
  filterTitlesMoreThanFiveWords,
} from "../../src/controller/filters";
import {
  entriesData,
  entriesDataLessThanFive,
  entriesDataMoreThanFive,
} from "../fixtures/entriesData";

describe("filterTitlesMoreThanFiveWords", () => {
  describe("When titles have more than five words", () => {
    it("should return the entries sorted by comments in descending order", () => {
      const filteredEntries = filterTitlesMoreThanFiveWords(entriesData, 5);
      expect(filteredEntries).toEqual([
        {
          number: 3,
          title:
            "OpenAI GPT-4: A Comprehensive Analysis and Future Projections",
          points: 512,
          comments: 104,
        },
        {
          number: 4,
          title:
            "Quantum Networking: Linking Qubits Over Long Distances (2023)",
          points: 429,
          comments: 88,
        },
        {
          number: 5,
          title:
            "Linux Kernel 5.15: A Look at the Latest Long-Term Support Release",
          points: 398,
          comments: 63,
        },
        {
          number: 2,
          title: "AI: Markets for Lemons, and the Great Logging Off (2022)",
          points: 345,
          comments: 59,
        },
        {
          number: 1,
          title: "Sipeed NanoKVM: A RISC-V Stick-On for Embedded Devices",
          points: 220,
          comments: 47,
        },
      ]);
    });
  });

  describe("When no title has more than five words", () => {
    it("should return an empty array", () => {
      const filteredEntries = filterTitlesMoreThanFiveWords(
        entriesDataLessThanFive,
        5
      );
      expect(filteredEntries).toEqual([]);
    });
  });
});

describe("filterTitlesLessThanFiveWords", () => {
  describe("When titles have five or less words", () => {
    it("should return the entries sorted by points in descending order", () => {
      const filteredEntries = filterTitlesLessThanFiveWords(entriesData, 5);
      expect(filteredEntries).toEqual([
        {
          number: 6,
          title: "Rust-158 Released with Improvements Measure",
          points: 621,
          comments: 78,
        },
        {
          number: 8,
          title: "FPGA-based Neural Networks",
          points: 517,
          comments: 73,
        },
        {
          number: 7,
          title: "Show HN: Distributed Web",
          points: 150,
          comments: 29,
        },
      ]);
    });
  });

  describe("When no title has five or less words", () => {
    it("should return an empty array", () => {
      const filteredEntries = filterTitlesLessThanFiveWords(
        entriesDataMoreThanFive,
        5
      );
      expect(filteredEntries).toEqual([]);
    });
  });
});
