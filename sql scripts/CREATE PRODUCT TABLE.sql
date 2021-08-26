USE [test]
GO

/****** Object:  Table [dbo].[Product]    Script Date: 8/23/2021 10:50:58 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Product]') AND type in (N'U'))
DROP TABLE [dbo].[Product]
GO

/****** Object:  Table [dbo].[Product]    Script Date: 8/23/2021 10:50:58 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
--drop TABLE [dbo].[Product]
CREATE TABLE [dbo].[Product](
	[id] int identity(1,1) NOT NULL,
	productName nvarchar NOT NULL,
	MAKAT INT NOT NULL,
	PRICE DECIMAL NOT NULL,
	ISACTIVE BIT NOT NULL,
	AMOUNT INT NULL,
	PRIMARY KEY (ID)
) ON [PRIMARY]
GO


