//package com.mkyong.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TimeMilisecond {
  public static void main(String[] argv) throws ParseException {

	SimpleDateFormat sdf = new SimpleDateFormat("y-M-d H:m");
	String dateInString = "22-01-2015 10:20";
	Date date = sdf.parse(dateInString);
		
	System.out.println(dateInString);
	System.out.println("Date - Time in milliseconds : " + date.getTime());

	Calendar calendar = Calendar.getInstance();
	calendar.setTime(date);
	System.out.println("Calender - Time in milliseconds : " + calendar.getTimeInMillis());

  }
}
