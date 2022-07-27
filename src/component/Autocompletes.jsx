import { Autocomplete, TextField, Checkbox, Button } from '@mui/material';
import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import { useForm, useFieldArray, Controller } from "react-hook-form";
// import './App.css';
function Autocompletes() {
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const data = [
    {
      "partAttributeId": "6fe2c08c-83c1-4ef7-aa1f-86d188738b2d",
      "partAttributeName": "attribute+5+signle",
      "allowWriteInVariant": false,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "71057f3f-9bb6-4880-a233-77f82da94e96",
          "textValue": "blue",
          "codeValue": "AE",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "4240eb5c-8877-4be5-92e2-63f4c736eec6",
          "textValue": "Logi",
          "codeValue": "LE",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "ad7d1846-6d68-40d1-ac76-c59d2fac8856",
          "textValue": "purple",
          "codeValue": "PR",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "4ea7723f-c381-4b5d-bfff-4fa470c4ec56",
          "textValue": "test",
          "codeValue": "TE",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "d5aef452-a1d5-4436-b325-d1f865e5e3e7",
          "textValue": "klsaf",
          "codeValue": "asf",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "5d3c830e-218c-445e-9b9e-58caa8ae9d62",
          "textValue": "mughees",
          "codeValue": "YE",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "9d5d2e46-3734-46a1-b46a-4070278b4ec1",
          "textValue": "liei",
          "codeValue": "HR",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "5cc61252-f168-47cd-9e5c-8a9a91f1bd31",
          "textValue": "asdfasdfasdfasdfasdfasdfasff",
          "codeValue": "ER",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "54605ae6-aff4-4a2b-b0fd-35c5562b1c62",
          "textValue": "blue1",
          "codeValue": "B1",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "b83bb959-9a51-4685-8d62-c1bb02b86e2c",
          "textValue": "test9",
          "codeValue": "T9",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "d94000e0-c974-46bc-bd9a-d8a82fbfefdc",
        "partAttributeTypeName": "Single Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 1,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "09cd755f-a051-4d2d-970b-77dd97dd5804",
      "partAttributeName": "test1546",
      "allowWriteInVariant": true,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "3c7105e4-646f-4ee0-ac10-5ae97d8dfa8c",
          "textValue": "blue",
          "codeValue": "AE",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "d208e5e2-e9fd-4f37-99f9-d034f193b7b2",
          "textValue": "fghfg",
          "codeValue": "iu",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "88943376-fcf3-411c-ba1b-e1eb43611637",
          "textValue": "asfl",
          "codeValue": "askfls",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "b5f0078f-6a5a-4778-a3de-c10e9e537d32",
          "textValue": "asdas",
          "codeValue": "dsad",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "1414a7f2-1c47-4752-afb2-6d3ce8688e94",
          "textValue": "asd",
          "codeValue": "asd",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "70715bab-8a37-46a9-b10f-095255c8ee54",
          "textValue": "orange",
          "codeValue": "purple",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "319ec563-2c06-4cca-93a4-65dfba25c0dd",
          "textValue": "test",
          "codeValue": "test",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "33361fd2-91b5-457c-b76a-827600c8189e",
          "textValue": "Lenovo",
          "codeValue": "AEW",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "ff839651-7d61-4f78-880b-50d5c0fb305b",
          "textValue": "purple",
          "codeValue": "PE",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "27a7fcc1-9a96-4178-a084-0bfc5b7780d3",
          "textValue": "Peach",
          "codeValue": "PL",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "aa037b82-3890-4131-b62a-37d730afd206",
          "textValue": "Yellow",
          "codeValue": "YE",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "7fcc455a-65b9-4a49-b0ed-524aef5cea08",
          "textValue": "test8",
          "codeValue": "T8",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "d94000e0-c974-46bc-bd9a-d8a82fbfefdc",
        "partAttributeTypeName": "Single Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 1,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "74c930e9-bbd2-4abc-8970-73f5a9972c73",
      "partAttributeName": "attribute+11+single+writein",
      "allowWriteInVariant": true,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "1535542e-ed52-4917-9726-9117f1b95e1b",
          "textValue": "blue",
          "codeValue": "LADS",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "07ca0fda-03a6-4a5f-9053-cc9337475f56",
          "textValue": "Test1",
          "codeValue": "YT",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "8be840b8-15fe-4fe3-b030-721499fab2b5",
          "textValue": "Demo",
          "codeValue": "CS",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "d94000e0-c974-46bc-bd9a-d8a82fbfefdc",
        "partAttributeTypeName": "Single Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 1,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "13ea584f-92e0-42fb-9f18-0cbcf28143e6",
      "partAttributeName": "attribute+9+single+writein",
      "allowWriteInVariant": true,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "b8b71c60-93c7-4098-b35b-cdeaaa50b9b8",
          "textValue": "blue",
          "codeValue": "TA",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "30f2c25e-5a1e-4f1e-948b-872c8c837306",
          "textValue": "Mughees Test",
          "codeValue": "YE",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "2d453ee3-682a-475d-bc96-958915143d4c",
          "textValue": "Test2",
          "codeValue": "Test3",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "d94000e0-c974-46bc-bd9a-d8a82fbfefdc",
        "partAttributeTypeName": "Single Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 1,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "978721ce-de25-480c-b802-f495c8a822af",
      "partAttributeName": "attribute+4+signle",
      "allowWriteInVariant": false,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "c0bca554-2f05-4267-9fc6-5833d62c34d1",
          "textValue": "blue",
          "codeValue": "BA",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "77ce4544-8e22-4f41-a9d7-b134c221a16c",
          "textValue": "dell",
          "codeValue": "PA",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "d94000e0-c974-46bc-bd9a-d8a82fbfefdc",
        "partAttributeTypeName": "Single Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 1,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "4351e42b-76d5-4767-93af-74adbca2c263",
      "partAttributeName": "BA",
      "allowWriteInVariant": true,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "13dffef8-a2bd-47e5-afe4-063a9fcea31f",
          "textValue": "asdfasd",
          "codeValue": "asd",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "05f42ec8-8d5a-4e6e-ad66-fd0421f2589d",
          "textValue": "Demo",
          "codeValue": "DA",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "3c447c48-5ba7-42dc-aabf-38f74d1092b5",
          "textValue": "Test",
          "codeValue": "CA",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "d94000e0-c974-46bc-bd9a-d8a82fbfefdc",
        "partAttributeTypeName": "Single Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 1,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "1fa18ae1-a6ee-413c-a991-015b9c810018",
      "partAttributeName": "attribute+1+signle+writein",
      "allowWriteInVariant": true,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "2cbb21dd-3558-4fb7-8625-a483e8cb0949",
          "textValue": "blue",
          "codeValue": "T3",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "e95019c4-2826-4d8b-80ab-29e7d8493117",
          "textValue": "test1",
          "codeValue": "test2",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "b23d2f4f-53b3-414c-b3fd-3dac317e41bc",
          "textValue": "yellow",
          "codeValue": "green",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "d94000e0-c974-46bc-bd9a-d8a82fbfefdc",
        "partAttributeTypeName": "Single Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 1,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "aa643850-9f2d-45aa-a984-d8eca6e6f201",
      "partAttributeName": "multiselect attribute",
      "allowWriteInVariant": true,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "9d9a5104-fa32-40f1-b8f1-3249ad071c2c",
          "textValue": "blue",
          "codeValue": "HJ",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "8d87062d-64eb-4138-90bf-ec27ba366938",
          "textValue": "green",
          "codeValue": "T1",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "ceb2ef9c-885e-49fd-a5d2-dbb6ff25251f",
          "textValue": "yellow",
          "codeValue": "T2",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "2938883c-4829-46c8-8cd7-f9df14891b16",
        "partAttributeTypeName": "Multi Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 2,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "c6f152e9-2c43-47b6-9c09-30b9fe7e8323",
      "partAttributeName": "attribute+2+multi+writein",
      "allowWriteInVariant": true,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "303b64a1-ba84-4799-837b-a95fc6bb8b3d",
          "textValue": "blue",
          "codeValue": "TAa",
          "__typename": "PartAttributeSelectVariant"
        },
        {
          "partAttributeSelectVariantId": "67cea03c-a165-4d1b-aa73-bb754e5180c4",
          "textValue": "green",
          "codeValue": "BC",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "2938883c-4829-46c8-8cd7-f9df14891b16",
        "partAttributeTypeName": "Multi Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 2,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    },
    {
      "partAttributeId": "010476e7-113f-4347-8a7f-3d2e323b951a",
      "partAttributeName": "attribute+3+signle",
      "allowWriteInVariant": false,
      "rangeMinimumValue": null,
      "rangeMaximumValue": null,
      "selectVariants": [
        {
          "partAttributeSelectVariantId": "08d1cefc-d701-4e74-9ea8-d80770f143af",
          "textValue": "blue",
          "codeValue": "TA",
          "__typename": "PartAttributeSelectVariant"
        }
      ],
      "partAttributeType": {
        "partAttributeTypeId": "d94000e0-c974-46bc-bd9a-d8a82fbfefdc",
        "partAttributeTypeName": "Single Select",
        "partAttributeTypeDescription": "",
        "sortOrder": 1,
        "__typename": "PartAttributeType"
      },
      "partCatalog": {
        "partCatalogId": "5133a9bd-b4b5-4d49-9249-f04ab36fe090",
        "partCatalogName": "MugheesTest3",
        "companyId": "c453c75e-d878-41b7-9f32-a87b302d4c80",
        "topLevelNodes": null,
        "__typename": "PartCatalog"
      },
      "partCategory": {
        "partCategoryId": "fd17a503-1679-4982-a434-0dc134b05891",
        "partCategoryName": "Categories",
        "partCatalog": null,
        "parentPartCategory": null,
        "subNodes": null,
        "__typename": "PartCategory"
      },
      "__typename": "PartAttribute"
    }
  ]
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
      label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
      label: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
      label: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  const { register, control, handleSubmit, reset, trigger, setError, watch } = useForm();
  const { fields, append, prepend, remove, replace } = useFieldArray({
    control,
    name: 'test',
  });
  //let err = "";

  useEffect(() => replace(data), []);
  const inputRef = useRef([]);
  let selectedData = [];
  const [show, setShow] = useState(false);
  const [codeTxt, setCodeTxt] = useState("");
  const [ddlTxt, setddlTxt] = useState("");
  // const refs = {}
  // const inputRef = useMemo(() => {
  //   fields.forEach((item) => {
  //     refs[item.id] = createRef(null)
  //   })
  //   return refs
  // }, [fields])
  //   useEffect(() => {
  //     inputRef.current = inputRef.current.slice(0, fields.length);
  //  }, [fields]);
  return (
    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: '100vh', flexDirection: 'row' }}>

      <form onSubmit={handleSubmit(data => console.log(selectedData))}>
        {
          fields.map((item, index) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'row' }} key={item.id}>
                <Controller
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      freeSolo
                      onChange={(event, value) => {
                        setddlTxt(value);
                        const isExist = item.selectVariants.map(function (e) { return `${e.textValue} - ${e.codeValue}`; }).indexOf(value);
                        // debugger
                        if (isExist !== -1) {
                          inputRef.current[index].style.display = "none";
                          const index = selectedData.map(function (e) { return e.id; }).indexOf(item.id);
                          if (index === -1) {
                            selectedData.push({ id: item.id, data: value });
                          }
                          else {
                            selectedData[index] = { id: item.id, data: value };
                          }
                        }
                      }}
                      multiple={item?.partAttributeType?.partAttributeTypeName === "Single Select" ? false : true}
                      options={item.selectVariants}
                      sx={{ width: 300, marginBottom: 2 }}
                      getOptionLabel={(option) => option?.textValue ? `${option?.textValue ?? ""} - ${option?.codeValue ?? ""}` : ddlTxt}
                      renderInput={(param) => <TextField onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                          //console.log('value2:', e);
                          // document.getElementById(`code${index}`).style.removeProperty("display");
                          inputRef.current[index].style.display = "flex";
                        }
                      }} {...param} label={item?.partAttributeType?.partAttributeTypeName} />}
                    />
                  )}
                  name={`test_${index}`}
                  control={control}
                />
                <TextField label="Code" onChange={(e) => setCodeTxt(e.target.value)} id={`code${index}`} ref={el => inputRef.current[index] = el} name={`code${index}`} style={{ display: "none", width: "100px", marginLeft: "10px" }}
                  onKeyDown={(e) => {
                    if (e.keyCode == 13) {
                      console.log("Autocomplete:", ddlTxt, "Code:", codeTxt);
                    }
                  }} />
                {/* {
                  true ? (
                    <TextField label="Code" id={`code${index}`} name={`code${index}`} style={{ width: "100px", marginLeft: "10px" }} />
                  ) : ""
                } */}
              </div>
            )
          })
        }
        <Button variant="contained" type='submit'>Submit</Button>
      </form>
    </div>
  );
}

export default Autocompletes;
