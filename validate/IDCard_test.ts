import { assertEquals } from "../deps.ts";
import { isIDCard } from "./iDCard.ts";

Deno.test("isIDCard with man", () => {
  const idCards: string[] = [
    "340181199306206339",
    "330226197203154791",
    "370103198212180934",
    "130421198311307253",
    "220181197602141596",
  ];
  idCards.forEach((item) => {
    assertEquals(isIDCard(item), true);
  });
});

Deno.test("isIDCard with woman", () => {
  const idCards: string[] = [
    "341024197608158909",
    "320982198812086204",
    "33112519851205996X",
    "130131199209052849",
    "320312199206249061",
  ];

  idCards.forEach((id) => {
    assertEquals(isIDCard(id), true);
  });
});

Deno.test("isIDCard with 15",()=>{
  const idCards: string[] = [
    '130503670401001',
    '320311770706001',
    '320311770706002'
  ];
  idCards.forEach((id) => {
    assertEquals(isIDCard(id), true);
  });
})
