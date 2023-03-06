module.exports.destinations = {
  zone1: {
    services: {
      parcel_next_day: {
        minWeightGrams: 1,
        maxWeightGrams: 30000,
        weightClasses: [
          {
            minWeightGrams: 1,
            maxWeightGrams: 30000,
            maxDimensionsCm: {
              length: 100,
              lengthPlusGirth: 300
            },
            baseRate: {
              amount: 6.5,
              currency: "GBP"
            },
            fuelSurcharge: {
              percentAmount: 15
            },
            carriageSurcharge: {
              amount: 0.2,
              currency: "GBP"
            },
            londonCongestionSurcharge: {
              amount: 0.75,
              currency: "GBP"
            },
            margin: {
              percentAmount: 8
            }
          }
        ]
      },
      parcel_saturday_12: {
        minWeightGrams: 99,
        maxWeightGrams: 20000,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 20000,
            maxDimensionsCm: {
              length: 60,
              width: 60,
              height: 60,
              lengthPlusGirth: 245
            },
            baseRate: {
              currency: "GBP",
              amount: 12
            },
            adjustment: {
              percentAmount: 15
            }
          }
        ]
      },
      parcel_saturday_1030: {
        minWeightGrams: 99,
        maxWeightGrams: 20000,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 20000,
            maxDimensionsCm: {
              length: 60,
              width: 60,
              height: 60,
              lengthPlusGirth: 245
            },
            baseRate: {
              currency: "GBP",
              amount: 18
            },
            adjustment: {
              percentAmount: 15
            }
          }
        ]
      }
    }
  },
  zone2: {
    services: {
      parcel_two_day: {
        minWeightGrams: 1,
        maxWeightGrams: 30000,
        weightClasses: [
          {
            minWeightGrams: 1,
            maxWeightGrams: 30000,
            maxDimensionsCm: {
              length: 100,
              lengthPlusGirth: 300
            },
            baseRate: {
              amount: 10.0,
              currency: "GBP"
            },
            fuelSurcharge: {
              percentAmount: 15
            },
            carriageSurcharge: {
              amount: 0.2,
              currency: "GBP"
            },
            londonCongestionSurcharge: {
              amount: 0.75,
              currency: "GBP"
            },
            margin: {
              percentAmount: 8
            }
          }
        ]
      }
    }
  },
  zone3: {
    services: {
      parcel_two_day: {
        minWeightGrams: 1,
        maxWeightGrams: 30000,
        weightClasses: [
          {
            minWeightGrams: 1,
            maxWeightGrams: 30000,
            maxDimensionsCm: {
              length: 100,
              lengthPlusGirth: 300
            },
            baseRate: {
              amount: 12.0,
              currency: "GBP"
            },
            fuelSurcharge: {
              percentAmount: 15
            },
            carriageSurcharge: {
              amount: 0.2,
              currency: "GBP"
            },
            londonCongestionSurcharge: {
              amount: 0.75,
              currency: "GBP"
            },
            margin: {
              percentAmount: 8
            }
          }
        ]
      }
    }
  },
  zone4: {
    services: {
      parcel_two_day: {
        minWeightGrams: 1,
        maxWeightGrams: 30000,
        weightClasses: [
          {
            minWeightGrams: 1,
            maxWeightGrams: 30000,
            maxDimensionsCm: {
              length: 100,
              lengthPlusGirth: 300
            },
            baseRate: {
              amount: 9.5,
              currency: "GBP"
            },
            fuelSurcharge: {
              percentAmount: 15
            },
            carriageSurcharge: {
              amount: 0.2,
              currency: "GBP"
            },
            londonCongestionSurcharge: {
              amount: 0.75,
              currency: "GBP"
            },
            margin: {
              percentAmount: 8
            }
          }
        ]
      }
    }
  },
  zone5: {
    services: {
      parcel_two_day: {
        minWeightGrams: 1,
        maxWeightGrams: 30000,
        weightClasses: [
          {
            minWeightGrams: 1,
            maxWeightGrams: 30000,
            maxDimensionsCm: {
              length: 100,
              lengthPlusGirth: 300
            },
            baseRate: {
              amount: 13.0,
              currency: "GBP"
            },
            fuelSurcharge: {
              percentAmount: 15
            },
            carriageSurcharge: {
              amount: 0.2,
              currency: "GBP"
            },
            londonCongestionSurcharge: {
              amount: 0.75,
              currency: "GBP"
            },
            margin: {
              percentAmount: 8
            }
          }
        ]
      }
    }
  },
  zone6: {
    services: {
      parcel_next_day: {
        minWeightGrams: 1,
        maxWeightGrams: 30000,
        weightClasses: [
          {
            minWeightGrams: 1,
            maxWeightGrams: 30000,
            maxDimensionsCm: {
              length: 100,
              lengthPlusGirth: 300
            },
            baseRate: {
              amount: 14.0,
              currency: "GBP"
            },
            fuelSurcharge: {
              percentAmount: 15
            },
            carriageSurcharge: {
              amount: 0.2,
              currency: "GBP"
            },
            londonCongestionSurcharge: {
              amount: 0.75,
              currency: "GBP"
            },
            margin: {
              percentAmount: 8
            }
          }
        ]
      }
    }
  },
  germany: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 14.27
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  france: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 13.27
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  netherlands: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 14.27
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  belgium: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 14.27
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  luxembourg: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 14.27
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  austria: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 15.26
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  denmark: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 15.26
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  czechia: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 17.72
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  italy: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 19.5
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  slovakia: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 19.5
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  spain: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 19.5
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  finland: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 25.13
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  portugal: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 18.1
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  sweden: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 18.1
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  poland: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 16.58
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  estonia: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 27.5
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  croatia: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 27.5
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  hungary: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 27.5
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  slovenia: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 19.71
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  lithuania: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 35.5
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  latvia: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 25.62
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  bulgaria: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 34.19
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  romania: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 30.29
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  },
  greece: {
    services: {
      classic_road: {
        minWeightGrams: 99,
        maxWeightGrams: 31500,
        weightClasses: [
          {
            minWeightGrams: 99,
            maxWeightGrams: 31500,
            maxDimensionsCm: {
              length: 175,
              lengthPlusGirth: 300
            },
            baseRate: {
              currency: "GBP",
              amount: 35.5
            },
            adjustment: {
              percentAmount: 10
            }
          }
        ]
      }
    }
  }
};
