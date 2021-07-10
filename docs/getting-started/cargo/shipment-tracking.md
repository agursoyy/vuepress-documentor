---
title: Shipment tracking
---
### Request URI

```shell
GET /v2/cargo/shipment/tracking?aWBPrefix={aWBPrefix}&aWBNumber={aWBNumber}

```



### Response Examples

```json
{
  "shipment": {
    "shipmentId": {
      "carrierNumericCode": "020",
      "aWBNumber": "08002050",
      "isAWBNoCheckDigitUsed": "true",
      "aWBSequenceNumber": 1.0
    },
    "awbIssueStation": "FRA"
  },
  "status": "MAN",
  "milestonePlan": {
    "version": 0,
    "milestones": {
      "milestone": [
        {
          "type": "RCS",
          "station": "FRA",
          "plannedTime": "2017-07-17T21:00:00Z",
          "actualTime": "2017-07-17T14:20:00Z",
          "plannedTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "actualTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "flight": {
            "flightCarrierCode": "LH",
            "flightNumber": "8170",
            "flightDate": "2017-07-19",
            "flightSegmentOrigin": "FRA",
            "flightSegmentDestination": "JFK"
          },
          "events": {
            "event": {
              "type": "RCS",
              "station": "FRA",
              "plannedTime": "2017-07-17T21:00:00Z",
              "actualTime": "2017-07-17T14:20:00Z",
              "actualTotals": {
                "noOfPieces": 10,
                "weight": 100
              },
              "category": "S"
            }
          }
        },
        {
          "type": "MAN",
          "station": "FRA",
          "plannedTime": "2017-07-19T08:00:00Z",
          "actualTime": "2017-07-19T08:10:00Z",
          "plannedTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "actualTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "flight": {
            "flightCarrierCode": "LH",
            "flightNumber": "8170",
            "flightDate": "2017-07-19",
            "flightSegmentOrigin": "FRA",
            "flightSegmentDestination": "JFK"
          },
          "events": {
            "event": {
              "type": "MAN",
              "station": "FRA",
              "plannedTime": "2017-07-19T08:00:00Z",
              "actualTime": "2017-07-19T08:10:00Z",
              "actualTotals": {
                "noOfPieces": 10,
                "weight": 100
              },
              "category": "F"
            }
          }
        },
        {
          "type": "DEP",
          "station": "FRA",
          "plannedTime": "2017-07-19T09:35:00Z",
          "plannedTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "actualTotals": {
            "noOfPieces": 0,
            "weight": 0
          },
          "flight": {
            "flightCarrierCode": "LH",
            "flightNumber": "8170",
            "flightDate": "2017-07-19",
            "flightSegmentOrigin": "FRA",
            "flightSegmentDestination": "JFK"
          },
          "events": ""
        },
        {
          "type": "ARR",
          "station": "JFK",
          "plannedTime": "2017-07-19T17:35:00Z",
          "plannedTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "actualTotals": {
            "noOfPieces": 0,
            "weight": 0
          },
          "flight": {
            "flightCarrierCode": "LH",
            "flightNumber": "8170",
            "flightDate": "2017-07-19",
            "flightSegmentOrigin": "FRA",
            "flightSegmentDestination": "JFK"
          },
          "events": ""
        },
        {
          "type": "RCF",
          "station": "JFK",
          "plannedTime": "2017-07-19T23:00:00Z",
          "plannedTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "actualTotals": {
            "noOfPieces": 0,
            "weight": 0
          },
          "flight": {
            "flightCarrierCode": "LH",
            "flightNumber": "8170",
            "flightDate": "2017-07-19",
            "flightSegmentOrigin": "FRA",
            "flightSegmentDestination": "JFK"
          },
          "events": ""
        },
        {
          "type": "NFD",
          "station": "JFK",
          "plannedTime": "2017-07-20T01:00:00Z",
          "plannedTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "actualTotals": {
            "noOfPieces": 0,
            "weight": 0
          },
          "flight": {
            "flightCarrierCode": "LH",
            "flightNumber": "8170",
            "flightDate": "2017-07-19",
            "flightSegmentOrigin": "FRA",
            "flightSegmentDestination": "JFK"
          },
          "events": ""
        },
        {
          "type": "DLV",
          "station": "JFK",
          "plannedTime": "2017-07-20T01:00:00Z",
          "plannedTotals": {
            "noOfPieces": 10,
            "weight": 100
          },
          "actualTotals": {
            "noOfPieces": 0,
            "weight": 0
          },
          "flight": {
            "flightCarrierCode": "LH",
            "flightNumber": "8170",
            "flightDate": "2017-07-19",
            "flightSegmentOrigin": "FRA",
            "flightSegmentDestination": "JFK"
          },
          "events": ""
        }
      ]
    }
  },
  "booking": {
    "product": {
      "productName": "td.Pro",
      "productConditions": {
        "sPLList": {
          "splCode": [
            "SPX",
            "GEN"
          ]
        }
      }
    },
    "totals": {
      "noOfPieces": 10,
      "weight": 100
    },
    "originalTimeFrame": {
      "lAT": "2017-07-18T18:35:00Z",
      "tOA": "2017-07-20T01:00:00Z"
    },
    "origin": "FRA",
    "destination": "JFK",
    "bookingTime": "2017-07-17T10:45:00Z",
    "isSplitBooking": false,
    "confirmationStatus": "KK"
  },
  "events": {
    "event": [
      {
        "type": "MAN",
        "station": "FRA",
        "actualTime": "2017-07-19T08:10:00Z",
        "actualTotals": {
          "noOfPieces": 10,
          "weight": 100
        },
        "category": "F"
      },
      {
        "type": "BKD",
        "station": "FRA",
        "actualTime": "2017-07-17T09:10:00Z",
        "actualTotals": {
          "noOfPieces": 10,
          "weight": 100
        },
        "category": "S"
      },
      {
        "type": "RCS",
        "station": "FRA",
        "actualTime": "2017-07-17T14:20:00Z",
        "actualTotals": {
          "noOfPieces": 10,
          "weight": 100
        },
        "category": "S"
      }
    ]
  },
  "efreightDetails": {
    "preCheckStatus": {
      "preCheckStatusCode": "S",
      "precheckStatusDescription": "Success",
      "precheckTime": "2017-07-17T11:09:03Z",
      "precheckTimeUTC": "2017-07-17T11:09:03Z"
    }
  },
  "shipmentStatusEvents": {
    "event": {
      "category": "F",
      "type": "MAN",
      "station": "FRA",
      "flight": {
        "flightCarrierCode": "LH",
        "flightNumber": "8170",
        "flightDate": "2017-07-19",
        "flightSegmentOrigin": "FRA",
        "flightSegmentDestination": "JFK"
      }
    }
  }
}
```