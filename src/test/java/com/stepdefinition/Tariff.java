package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Tariff {
	
	static WebDriver driver;
	@Given("User should launch the browser")
	public void user_should_launch_the_browser() {
	   System.setProperty("webdriver.chrome.driver", "C:\\New folder\\chromedriver.exe" );
	   driver=new ChromeDriver();
	   driver.get("http://www.demo.guru99.com/telecom/");
	}

	
	@Given("User click add tariff plans")
public void user_click_add_tariff_plans() {
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
		driver.manage().window().maximize();
    }



/*@When("User provide the valid details")
public void user_provide_the_valid_details(io.cucumber.datatable.DataTable dataTable) {
	List<List<String>> twodlist = dataTable.asLists(String.class);
	System.out.println(twodlist);
	driver.findElement(By.xpath("//input[@name='rental']")).sendKeys("111");
	driver.findElement(By.id("local_minutes")).sendKeys(twodlist.get(0).get(0));
	driver.findElement(By.id("inter_minutes")).sendKeys(twodlist.get(0).get(2));
	driver.findElement(By.id("sms_pack")).sendKeys(twodlist.get(1).get(1));
	driver.findElement(By.id("minutes_charges")).sendKeys(twodlist.get(1).get(4));
	driver.findElement(By.id("inter_charges")).sendKeys(twodlist.get(2).get(6));
	driver.findElement(By.id("sms_charges")).sendKeys(twodlist.get(2).get(5));
	driver.findElement(By.xpath("//input[@name='submit']")).click();

   }*/
	
	

@When("User provide the valid details")
public void user_provide_the_valid_details(io.cucumber.datatable.DataTable dataTable) {
   List<Map<String,String>> twodmap = dataTable.asMaps(String.class,String.class);
   System.out.println(twodmap);
   driver.findElement(By.xpath("//input[@name='rental']")).sendKeys("mrent");
	driver.findElement(By.id("local_minutes")).sendKeys(twodmap.get(0).get("freelm"));
	driver.findElement(By.id("inter_minutes")).sendKeys(twodmap.get(0).get("freeim"));
	driver.findElement(By.id("sms_pack")).sendKeys(twodmap.get(1).get("sms"));
	driver.findElement(By.id("minutes_charges")).sendKeys(twodmap.get(1).get("lpm"));
	driver.findElement(By.id("inter_charges")).sendKeys(twodmap.get(1).get("imc"));
	driver.findElement(By.id("sms_charges")).sendKeys(twodmap.get(0).get("spc"));
	driver.findElement(By.xpath("//input[@name='submit']")).click();

   
}



	@Then("To verify the text is dispayed")
public void to_verify_the_text_is_dispayed() {
   Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
}



}
