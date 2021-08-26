USE [test]
GO
/****** Object:  StoredProcedure [dbo].[MargeProducts]    Script Date: 8/23/2021 6:56:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[MargeProducts]
--change to list update
	@id int ,
	@productName nvarchar ,
	@MAKAT INT ,
	@PRICE DECIMAL ,
	@ISACTIVE BIT ,
	@AMOUNT INT = null
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	declare @source table(
		[id] int  NOT NULL,
		productName nvarchar NOT NULL,
		MAKAT INT NOT NULL,
		PRICE DECIMAL NOT NULL,
		ISACTIVE BIT NOT NULL,
		AMOUNT INT NULL
	)
	insert into @source VALUES (@id,@productName,@MAKAT,@PRICE,@ISACTIVE,@AMOUNT)

	merge product as targetP
	using @source as sourceP
	on targetP.id = sourceP.id
	when matched and
	(
		targetP.productName != sourceP.productName  
		or targetP.MAKAT != sourceP.MAKAT 
		or targetP.PRICE!= sourceP.PRICE 
		or targetP.ISACTIVE != sourceP.ISACTIVE 
		or targetP.AMOUNT!= sourceP.AMOUNT
	)
	then update set
	targetP.productName = sourceP.productName , 
	targetP.MAKAT = sourceP.MAKAT ,
	targetP.PRICE = sourceP.PRICE ,
	targetP.ISACTIVE = sourceP.ISACTIVE ,
	targetP.AMOUNT = sourceP.AMOUNT
	when not matched by target
	then insert VALUES (@productName,@MAKAT,@PRICE,@ISACTIVE,@AMOUNT)
	when not matched by source and targetp.id = @id
	then delete;

	select SCOPE_IDENTITY()


END
