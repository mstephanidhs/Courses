package com.itbulls.primitives;

public class PrimitivesTypes {
	
	public static void main(String[] args) {
		byte b = 1;
		short s;
		s = 2;
		int i = 3;
		long l = 4;
		
		char c = 'a';
		
		boolean bool = true;
		
		float f = 1.2F;
		
		long l2 = 2_000_000_000L;
		
		double d = 1.3;
		
//		java will define the type of the var after the initialization
//		so it will take only integers
		var v = 1;
		
		int i3 = s;
		
//		read from the unicode table in order to get the char
		char c2 = 100;
		
		double d2 = i3;
		d2 = l;
		
		b = (byte)i3;
		
//		overflows
		byte b2 = (byte)1000;
		
		long number = 499_999_999_000_000_001L;
		double converted = (double) number;
		
//		same number in all of the systems
		int dec = 152;
		int bin = 0b10011000;
		int oct = 0230;
		int hex = 0x98;
	}

}
