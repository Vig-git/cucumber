package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)

@CucumberOptions(features="src/test/resources/Features",glue="com.stepdefinition",tags= {"@tag1,@tag2"},plugin= {"html:target","rerun:src/test/resources/features/failed.txt"},dryRun=false,monochrome=true,strict=true)


public class Testrunner {

}
