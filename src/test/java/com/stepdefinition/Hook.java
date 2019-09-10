package com.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver driver;
	
	@Before
	public void user_should_launch_browser() {
		   System.setProperty("webdriver.chrome.driver", "C:\\New folder\\chromedriver.exe" );
		   driver=new ChromeDriver();
		   System.out.println("before");
		   driver.get("http://www.demo.guru99.com/telecom/");
	}
	
	@After
	public void browser_close() {
		System.out.println("after");
		driver.close();
		driver.quit();
	}

}
