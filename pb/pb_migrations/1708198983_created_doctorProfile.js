/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oypg945r9jbqjlv",
    "created": "2024-02-17 19:43:03.980Z",
    "updated": "2024-02-17 19:43:03.980Z",
    "name": "doctorProfile",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mysammzg",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "rwjmcmb0",
        "name": "specialization",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 8,
          "values": [
            "bone",
            "body",
            "baby",
            "skin",
            "child",
            "x-ray",
            "eye",
            "general"
          ]
        }
      },
      {
        "system": false,
        "id": "fz3vb29l",
        "name": "Hospital",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3dkbgrwg",
        "name": "Clinic",
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
  const collection = dao.findCollectionByNameOrId("oypg945r9jbqjlv");

  return dao.deleteCollection(collection);
})
