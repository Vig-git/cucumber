package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Add {
	
	static WebDriver driver;
	@Given("User should launch browser")
	public void user_should_launch_browser() {
	   System.setProperty("webdriver.chrome.driver", "C:\\New folder\\chromedriver.exe" );
	   driver=new ChromeDriver();
	   driver.get("http://www.demo.guru99.com/telecom/");
	}

	@Given("User click add customer link")
	public void user_click_add_customer_link() {
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
		driver.manage().window().maximize();
	}

	@When("User provide valid details")
	public void user_provide_valid_details() {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("vignesh");
		driver.findElement(By.id("lname")).sendKeys("raj");
		driver.findElement(By.id("email")).sendKeys("vigneshraj@gmail.com");
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("chennai");
		driver.findElement(By.id("telephoneno")).sendKeys("12234444");
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	@Then("To verify the customer id is dispayed")
	public void to_verify_the_customer_id_is_dispayed() {
	    Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
 }
}