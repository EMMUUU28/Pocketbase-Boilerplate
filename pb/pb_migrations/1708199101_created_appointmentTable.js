/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h0deqdd2k3cy0dt",
    "created": "2024-02-17 19:45:01.270Z",
    "updated": "2024-02-17 19:45:01.270Z",
    "name": "appointmentTable",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "phoqente",
        "name": "patient",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "t1q67hho7810fq9",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "jdo3vxzo",
        "name": "doctor",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "oypg945r9jbqjlv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "z1lrrrr4",
        "name": "time",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "o7g2f7va",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "scheduled",
            "confirmed",
            "cancelled"
          ]
        }
      },
      {
        "system": false,
        "id": "k5w3i1z2",
        "name": "notes",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h0deqdd2k3cy0dt");

  return dao.deleteCollection(collection);
})
