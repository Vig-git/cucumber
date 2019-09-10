$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Try.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use the template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate the customer id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Add.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid details",
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/onedlist.feature");
formatter.feature({
  "name": "Add Customer onedist",
  "description": "  I want to use the template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate the customer id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Add.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid deta",
  "rows": [
    {
      "cells": [
        "vignesh",
        "raj",
        "vicky@gmail.com",
        "chennai",
        "212414"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_deta(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/onedmap.feature");
formatter.feature({
  "name": "Add Customer onedmap",
  "description": "  I want to use the template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate the customer id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Add.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid det",
  "rows": [
    {
      "cells": [
        "fname",
        "vignesh"
      ]
    },
    {
      "cells": [
        "lname",
        "raj"
      ]
    },
    {
      "cells": [
        "email",
        "vicky@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phoneno",
        "1234565"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_det(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/outline.feature");
formatter.feature({
  "name": "Add Customer outline",
  "description": "  I want to use the template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Generate the customer id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.step({
  "name": "User provide valid detail\"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cemail\u003e\",\"\u003caddress\u003e\",\"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "To verify the customer id is dispayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "vignesh",
        "raj",
        "abc@gmail.com",
        "chennai",
        "123456"
      ]
    },
    {
      "cells": [
        "ganesh",
        "kumar",
        "ganesh@gmail.com",
        "bangalore",
        "27725783"
      ]
    },
    {
      "cells": [
        "cristiano",
        "ronaldo",
        "cr7@gmail.com",
        "portugal",
        "2722782"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generate the customer id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Add.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detail\"vignesh\",\"raj\",\"abc@gmail.com\",\"chennai\",\"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_detail(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate the customer id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Add.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detail\"ganesh\",\"kumar\",\"ganesh@gmail.com\",\"bangalore\",\"27725783\"",
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_detail(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate the customer id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Add.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Add.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide valid detail\"cristiano\",\"ronaldo\",\"cr7@gmail.com\",\"portugal\",\"2722782\"",
  "keyword": "When "
});
formatter.match({
  "location": "Add.user_provide_valid_detail(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the customer id is dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.to_verify_the_customer_id_is_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/twodlist.feature");
formatter.feature({
  "name": "Add Tariff plan twodlist",
  "description": "  I want to use the template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate the Tariff plans",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Tariff.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add tariff plans",
  "keyword": "And "
});
formatter.match({
  "location": "Tariff.user_click_add_tariff_plans()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide the valid detail",
  "rows": [
    {
      "cells": [
        "111",
        "222",
        "333",
        "444",
        "555",
        "666",
        "777"
      ]
    },
    {
      "cells": [
        "123",
        "234",
        "345",
        "567",
        "789",
        "901",
        "122"
      ]
    },
    {
      "cells": [
        "101",
        "202",
        "303",
        "404",
        "505",
        "606",
        "707"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Tariff.user_provide_the_valid_detail(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the text is dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Tariff.to_verify_the_text_is_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/twodmap.feature");
formatter.feature({
  "name": "Add Tariff plan twodmap",
  "description": "  I want to use the template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate the Tariff plans",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Tariff.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click add tariff plans",
  "keyword": "And "
});
formatter.match({
  "location": "Tariff.user_click_add_tariff_plans()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provide the valid details",
  "rows": [
    {
      "cells": [
        "mrent",
        "freelm",
        "freeim",
        "sms",
        "lpm",
        "imc",
        "spc"
      ]
    },
    {
      "cells": [
        "123",
        "234",
        "345",
        "567",
        "789",
        "901",
        "122"
      ]
    },
    {
      "cells": [
        "101",
        "202",
        "303",
        "404",
        "505",
        "606",
        "707"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Tariff.user_provide_the_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify the text is dispayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Tariff.to_verify_the_text_is_dispayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});